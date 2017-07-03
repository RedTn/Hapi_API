const Hapi = require('hapi');

const todoList = [
    {
        "task": "Walk the cat",
        "owner": "Kirsten"
    },
    {
        "task": "Water the plants",
        "owner": "Kirsten"
    }
];

const server = new Hapi.Server();
server.connection({ port: 8080 });

server.route([
    {
        method: 'GET',
        path: '/',
        handler: function(request, reply) {
            reply("Hello world from Hapi.");
        }
    },
    {
        method: 'GET',
        path: '/api/v1/todoList',
        handler: function(request, reply) {
            reply(todoList);
        }
    },
    {
        method: 'POST',
        path: '/api/v1/todoList',
        handler: function(request, reply) {
            newTask = {"task":request.payload.task, "owner":request.payload.owner};
            todoList.push(newTask);
            reply(todoList).code(201);
        }
    },
    {
        method: 'GET',
        path: '/api/v1/todoList/{index}',
        handler: function(request, reply) {
            reply(todoList[request.params.index-1]);
        }
    },
    {
        method: 'PUT',
        path: '/api/v1/todoList/{index}',
        handler: function(request, reply) {
            newTask = {"task":request.payload.task, "owner":request.payload.owner};
            todoList[request.params.index-1] = newTask;
            reply(todoList[request.params.index-1]);
        }
    },
    {
        method: 'DELETE',
        path: '/api/v1/todoList/{index}',
        handler: function(request, reply) {
            delete todoList[request.params.index-1];
            reply().code(204);
        }
    }
]);

server.start(function(err) {
    console.log("Hapi is listening on localhost:8080");
});