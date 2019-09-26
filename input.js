
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = process.stdin.on('data', key => {
    //exit on ctrl+c
    if (key === '\u0003') {
      console.log('Disconnected from game');
      process.exit();
    }
    //up
    if (key === 'w') {
      console.log('^')
      conn.write("Move: up")
    }
    //down
    if (key === 's') {
      console.log('V')
      conn.write("Move: down")
    }
    //left
    if (key === 'a') {
      console.log('<')
      conn.write("Move: left")
    }
    //right
    if (key === 'd') {
      console.log('>')
      conn.write("Move: right")
    }
    if (key === 'e') {
      console.log('Mastahblastah');
      conn.write('Say: Mastahblastah')
    }
  })
  return stdin
};

module.exports = {setupInput};