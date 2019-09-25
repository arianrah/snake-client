const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: ARI');
    // conn.write('Move: up');
  });

  return conn;
}

module.exports = {connect}