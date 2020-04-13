const express = require("express");
var cors = require("cors");
let upload = require("express-fileupload");
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Headers ', 'Content-Type', 'application/json');
  next();
}

class Server {
  constructor({ config, router }) {
    this._config = config;
    this._express = express();
    this._express.use(express.json({limit: '50mb'}));
    this._express.use(router);
    this._express.use(cors());
    this._express.use(allowCrossDomain);
    this._express.use(upload());
    // this._express.use(express.bodyParser({limit: '50mb'}));
  }

  start() {
    return new Promise((resolve, reject) => {
      const http = this._express.listen(this._config.PORT, () => {
        const { port } = http.address();
        console.log("Application running on port " + port);
        resolve();
      });
    });
  }
}

module.exports = Server;
