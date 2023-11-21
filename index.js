import http from 'http'
import { Server } from 'socket.io';

import Koa from 'koa'
const app = new Koa()

const server = http.createServer(app.callback())
const io = new Server(server)

io.on('connection', async (socket) => {
    socket.on('chat', async (msg) => {
        console.log(`${msg.client_name} started chat.`)
        io.to(socket.id).emit('reply', `Hello ${msg.client_name}!`)
    });
});

server.listen(3000, () => {
    console.log('Application is starting on port 3000')
})
