import io from 'socket.io-client';
const clientName = process.argv[2]
const socket = io('http://localhost:3000')
// Listen for the "connect" event
socket.on('connect', () => {
    console.log('Connected to the server');
    // Send a "chat" event to the server
    socket.emit('chat', { message: 'Hello, server!', client_name: clientName });
});
// Listen to reply
socket.on('reply', data => {
    console.log(data)
})

