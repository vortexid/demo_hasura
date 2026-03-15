import express from 'express';
import { Application } from '../app/application.js';
import { HttpServer } from '../infrastructure/http/httpServer.js';
import { config } from '../config/config.js';

export class Bootstrap {
    static async run() {
        const port = config.env === 'development' ? config.devPort : config.port;
        const server = express();
        const httpServer = new HttpServer(server, port);
        await httpServer.start();
        const appCore = new Application();
    }
}