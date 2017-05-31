const http = require('http');

const blogPage = `
<!DOCTYPE html>
<html>
  <header>
    <meta charset='utf-8'/>
    <title>Anlin\`s Blog</title>
    <style type="text/css">
      * {
        padding: 0;
        margin: 0;
      }
      body {
        padding: 30px 0;
        text-align: center;
        font-size: 16px;
        background-color: #333;
      }
      h1,h2 {
        color: #fff;
      }
    </style>
  </header>
  <body>
    <h1>Anlin\`s Blog...</h1>
    <h1>There is Anlin home</h1>
    <h1>Welcome my Blog space</h1>
  </body>
</html>
`;

http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(blogPage);
}).listen(3030, () => {
  console.log('server running at 3030')
});
