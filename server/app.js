// Initialization of websocket
const Websocket = require('ws');
// websocket sever
const wss = new Websocket.Server({ port: 8989 });
// users array
const users = [];
// broadcast data to all the sockets
const broadcast = (data, ws) => {
  wss.clients.forEach(client => {
    if (client.readyState === Websocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data))
    }
  })
}
// when socket is open
wss.on('connection', (ws) => {
  let index;
  ws.on('message', (message) => {
    const data = JSON.parse(message)
    switch (data.type) {
      case 'ADD_USER':
        index = users.length;
        users.push({ name: data.name, id: index + 1 })
        ws.send(JSON.stringify({
          type: 'USERS_LIST',
          users,
        }))
        broadcast({
          type: 'USERS_LIST',
          users,
        }, ws)
        break;

      case 'ADD_MESSAGE':
        broadcast({
          type: 'ADD_MESSAGE',
          message: data.message,
          author: data.author,
        }, ws)
        break;
      default:
        break;
    }
  })
  // when close de socket
  ws.on('close', () => {
    users.splice(index, 1);
    broadcast({
      type: 'USERS_LIST',
      users,
    }, ws)
  })
})
