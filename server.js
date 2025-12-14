const http = require("http");

const app = http.createServer((req, res) => {
  const { url, method } = req;

  const styling = `<style>
    body {
    background-color: black;
}   body div {
   display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  border: 1px solid #f0f0f0;
  border-radius: 3%;
  background-color: aquamarine;
   }
  h1{
  font-size: 2.5rem;
  }
  ul{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;}
  ul li {
  list-style: none; color: #f0f0f0;}

  li a { color: #f0f0f0; text-decoration: none;
  }

  </style>`;

  const navBar = `<nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>`;

  // console.log(req);
  if (method === "GET") {
    // Homepage Code
    if (url === "/") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(`<head>${styling}</head>
                <body>
                    ${navBar}
                    <div>
                        <h1>HOME PAGE</h1>
                    </div>
                </body>`);
    }
    // Aboutpage Code
    else if (url === "/about") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(`<head>${styling}</head>
                <body>
                    ${navBar}
                    <div>
                        <h1>ABOUT PAGE</h1>
                    </div>
                </body>`);
    }
    // Contactpage Code
    else if (url === "/contact") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(`<head>${styling}</head>
                <body>
                    ${navBar}
                    <div>
                        <h1>CONTACT PAGE</h1>
                    </div>
                </body>`);
    }
    // Errorpage Code
    else {
      res.writeHead(404, { "content-type": "text/html" });
      res.write(`<head>${styling}</head>
                <body>
                    ${navBar}
                    <div>
                    <h1>Invalid Page </h1>
                    </div>`);
    }
  }
  res.end();
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`NodeJS Server Running on http://localhost:${PORT}`);
});
