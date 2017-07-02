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
    }
]);

server.start(function(err) {
    console.log("Hapi is listening on localhost:8080");
});