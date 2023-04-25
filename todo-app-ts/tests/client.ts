import { todoappts } from '../clients/typescript';
import { TaskId } from '../clients/typescript/protos/Todo';

const client = new todoappts();

client.GetTask(TaskId.fromPartial({
    id: '1'
})).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
});