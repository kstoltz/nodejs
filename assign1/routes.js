// Assignment 1 - Routes
const requestHandler = (req, res) => {

  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Assignment 1: User List</title></head>');
    res.write('<body>');
    res.write('<form action="/create-user" method="POST">');
    res.write('<input type="text" name="userName">');
    res.write('<button type="submit">Submit</button>');
    res.write('<div></div>');
    res.write('<a href=/users>List Users</a>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/users' && method === 'GET') {
    res.write('<html>');
    res.write('<head><title>Assignment 1: User List</title></head>');
    res.write('<body>');
    res.write('<ul>');
    res.write('<li>User A</li>');
    res.write('<li>User B</li>');
    res.write('<li>User C</li>');
    res.write('<li>User D</li>');
    res.write('</ul>');
    res.write('<div />')
    res.write('<a href="/">Go back</a>')
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });

    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      let userName = parsedBody.split('=')[1];
      console.log(userName);
      
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
      
    })

  }

}

module.exports = {
  handler: requestHandler
};