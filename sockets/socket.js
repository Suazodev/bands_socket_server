const { io } = require('../index.js');
io.on('connection', (client) => {
  console.log('client connected');
  client.on('disconnect', () => {
    console.log('client disconnected');
  });
  client.on('message', (message) => {
    console.log(message);
    io.emit('message', { admin: 'New message' });
  });
});
