const fs = require('fs');

const requestHandler = (req, res) => {

  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  } 
  
  if (url === '/message' && method === 'POST') {
    const body = [];
    // Start reading the chunks of data. These cannot be used until the request "end" event handler.
    req.on('data', (chunk) => {
      //console.log(chunk);
      
      // Push each chunk into the body array.
      body.push(chunk);
    });
  
    // The return statement will make sure this is executed before the block outside the
    // request event handlers.
  
    return req.on('end', () => {
      // Now that the request "end" event handler has fired, use a Buffer to read the chunks
      // from the body array.
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
  
      // fs.writeFile vs. fs.writeFileSync - the former is asynchronous and non-blocking
      // while the latter is synchronous and will block until complete. fs.writefile also
      // has a callback parameter for error handling and clean up.
  
      fs.writeFile('hello.txt', message, (err) => {
  
        // Redirect to / and end the response
  
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
      });
    })
  }
  
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body>Hello world!</body>');
  res.write('</html>');
  res.end();
  //process.exit();
}

// Variations on exporting modules.

//module.exports = requestHandler;

//modules.exports.handler = requestHandler;

module.exports = {
  handler: requestHandler
};