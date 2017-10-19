const ServerJs = require('serverjs');
const server = require('./server');

class ExpressArch extends ServerJs {

  constructor ({ express }) {
    super();
    this.express = express;
    this.app = express();
  }

  start() {
    return server.start({ 
      app: this.app,
      port: 10
    })
    .then(msg => {
      this.log.info(msg);
      return this.app;
    })
    .catch(err => {
      this.log.error(err);
      throw err;
    });
  }

}

module.exports = ExpressArch;