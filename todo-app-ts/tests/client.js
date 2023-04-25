"use strict";
exports.__esModule = true;
var typescript_1 = require("../clients/typescript");
var Todo_1 = require("../clients/typescript/protos/Todo");
var client = new typescript_1.todoappts();
client.GetTask(Todo_1.TaskId.fromPartial({
    id: '1'
})).then(function (res) {
    console.log(res);
})["catch"](function (err) {
    console.log(err);
});
