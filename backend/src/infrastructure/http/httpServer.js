import http from 'http';
import { once  } from 'events';

export class HttpServer {
  constructor(app, port) {
    this.app = app;
    this.port = port;
    this.server = http.createServer(this.app);
  }

async start() {
  this.server.listen(this.port);
  try {
    await once(this.server, 'listening');
    console.log(`HTTP server running on port ${this.port}`);
  } catch (err) {
    throw err;
  }
}
}