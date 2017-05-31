const http = require('http');

const photoPage = `
<!DOCTYPE html>
<html>
  <header>
    <meta charset='utf-8'/>
    <title>Anlin\`s Live</title>
    <style type="text/css">
      * {
        padding: 0;
        margin: 0;
      }
      body {
        padding: 60px 0;
        text-align: center;
        font-size: 16px;
        background-color: #333;
      }
      h1,h2 {
        color: #fff;
        margin: 100px 0;
      }
    </style>
  </header>
  <body>
    <h1>Anlin\`s Live...</h1>
    <h1>There is Anlin home</h1>
    <h1>Welcome my Live space</h1>
  </body>
</html>
`;

http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(photoPage);
}).listen(5000, () => {
  console.log("live server running at 5000")
});
