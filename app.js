const http = require('http');

const homePage = `
<!DOCTYPE html>
<html>
  <header>
    <meta charset='utf-8'/>
    <title>Anlin Home</title>
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
      nav {
        margin-top: 20px;
      }
      a {
        color: #ccc;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    </style>
  </header>
  <body>
    <h1>Hello World, I am Anlin Yang</h1>
    <h1>There is Anlin\`s Home</h1>
    <nav>
      <ul>
        <li>
          <a target="_blank" href="http:\/\/localhost:3030">Anlin\`s Blog</a>
        </li>
        <li>
          <a target="_blank" href="http:\/\/localhost:4000">Anlin\`s Photo</a>
        </li>
        <li>
          <a target="_blank" href="http:\/\/localhost:5000">Anlin\`s Live</a>
        </li>
      </ul>
    </nav>
  </body>
</html>
`

http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(homePage);
})
.listen(3000, () => {
  console.log("Server Running At 3000");
});
