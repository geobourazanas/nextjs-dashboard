// test-connection.js
const http = require('http');

http.get('http://192.168.29.176:7098/api/TodoItems', (res) => {
  let data = '';

  // A chunk of data has been received.
  res.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received.
  res.on('end', () => {
    console.log(data);
  });
}).on('error', (err) => {
  console.error('Error: ', err.message);
});

