import {
  CircularDataFrame,
  DataQueryRequest,
  DataQueryResponse,
  DataSourceApi,
  DataSourceInstanceSettings,
  FieldType,
  LoadingState,
} from '@grafana/data';
import { Observable, merge } from 'rxjs';
import defaults from 'lodash/defaults';
import { IotServiceClient } from 'api/sylklabs/iot/v1/IotServiceClientPb';
import { Topic, SensorData } from 'api/sylklabs/iot/v1/iot_pb';
import { defaultQuery, IotQuery, SylkIotDatasourceOptions } from './types';

export class DataSource extends DataSourceApi<IotQuery, SylkIotDatasourceOptions> {
  
  host: string;
  subscription: any;
  client: IotServiceClient;
  subscriptions: any = {}
  constructor(instanceSettings: DataSourceInstanceSettings<SylkIotDatasourceOptions>) {
    super(instanceSettings);

    this.host = instanceSettings.jsonData.host || 'http://localhost:9000';
    // Insatntiating new clients for HealthCheck Service And Pubsub Service
    // Passing default localhost at port 9000 (Envoy proxy) - or getting jsonData var from user.
    this.client = new IotServiceClient(this.host);
  }



  query(request: DataQueryRequest<IotQuery>): Observable<DataQueryResponse> {

    console.log(request.panelId,request.queryGroupId)
    const streams = request.targets.map(target => {
      console.log(request.requestId)

      const query = defaults(target, defaultQuery);
        
        // Checking if subscription is already found on DataSource class.
        // If yes it will cancel the subscription every time a re-query is triggered,
        // so no duplicate subscription scenario will happen.
        if (this.subscriptions[request.requestId] !== undefined) {
          this.subscriptions[request.requestId].cancel()
          this.subscription.cancel()
        }
        
        return new Observable<DataQueryResponse>((subscriber) => {
          const frame = new CircularDataFrame({
            append: 'tail',
            capacity: 10000,
          });
  
          let topic_subscribe = new Topic().setName(query.topic)
  
          // Callback to be tirggered for each data event
          function callback(response: SensorData) {
            // Adding data input from stream to frame
            frame.add({ time: response.getTimestamp().toDate(), value: response.getValue()  });
            // Passing the frame
            subscriber.next({
              data: [frame],
              key: query.refId,
              state: LoadingState.Streaming,
            });
          }
          frame.refId = query.refId;
  
          frame.addField({ name: 'time', type: FieldType.time , labels: {'topic':query.topic}});
          frame.addField({ name: 'value', type: FieldType.number, labels: {'topic':query.topic} });
          this.subscriptions[request.requestId] = this.subscription;
          // Subscribing to topic chosed by user at query level
          this.subscription = this.client.subscribe(topic_subscribe).on('data',callback).on('end',() => {
            throw new Error("Ended the stream")
          }).on('error',(err: any) => {
            console.log("Error",err)
            throw new Error("Ended the stream "+err)
          }).on('metadata',(md) => {
            console.log(md)
          }).on('end',() => {
            console.log('ended')
          })
  
        });
      })
  
      return merge(...streams);

  }

  async testDatasource() {
    // Implement a health check for your data source.
    return {
      status: 'success',
      message: 'Success',
    };
  }
}
