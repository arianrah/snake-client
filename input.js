const setupInput = function() {
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
  })
  return stdin
};

module.exports = {setupInput};