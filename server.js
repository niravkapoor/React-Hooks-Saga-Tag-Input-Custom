const express = require('express');
const server = express();
const port = parseInt(process.env.PORT, 10) || 3000;
const path = require('path');

server.use(express.static('dist'));

server.get("*", (req, res) => {
    res.setHeader("Cache-Control", "public, max-age=31556952000");
    res.setHeader("Expires", new Date(Date.now() + 31556952000).toUTCString());

    switch(true){
        case req.url === "/":
            res.sendFile(path.join(__dirname + '/dist/index.html'));
            return;
        default:
            res.sendFile(path.join(__dirname + req.url));
            break;
    }
})

server.listen(port, (err) => {
    if (err) {
      throw err;
    }
    console.log(`> Application running on ${port}`);
});