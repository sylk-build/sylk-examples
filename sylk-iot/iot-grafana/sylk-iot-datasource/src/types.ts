import { DataQuery, DataSourceJsonData } from '@grafana/data';

export interface IotQuery extends DataQuery {
  // queryText?: string;
  // constant: number;
  topic: string;
}

export const defaultQuery: Partial<IotQuery> = {
  topic: 'test-topic',
};

// /**
//  * These are options configured for each DataSource instance
//  */
// export interface MyDataSourceOptions extends DataSourceJsonData {
//   path?: string;
// }

/**
 * These are options configured for each DataSource instance
 */
 export interface SylkIotDatasourceOptions extends DataSourceJsonData {
  path?: string;
  // Webezy full hostname https/http must be included
  host?: string;
}


/**
 * Value that is used in the backend, but never sent over HTTP to the frontend
 */
export interface MySecureJsonData {
  apiKey?: string;
}

