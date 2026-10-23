const http = require("http");
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.join(__dirname, "index.html"));
const port = Number(process.env.PORT) || 3000;
http.createServer((req, res) => {
  if (req.url === "/health") { res.writeHead(200); return res.end("ok"); }
  res.writeHead(200, {
    "content-type": "text/html; charset=utf-8",
    "cache-control": "no-cache",
    "x-content-type-options": "nosniff",
    "referrer-policy": "no-referrer"
  });
  res.end(html);
}).listen(port, () => console.log("Hike Finder Studio on port " + port));
