import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';
import * as express from 'express';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { AppServerModule } from './app/app.server.module';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { ROUTES } from './routes';
import { App } from './api/app';
import { enableProdMode } from '@angular/core';

import * as jsonServer from 'json-server';
enableProdMode();
const app = express();
const api = new App();
const port = 8000;
const baseUrl = `http://localhost:${port}`;

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModule
}));

app.set('view engine', 'html');
app.set('views', 'src');

app.use('/', express.static('dist', { index: false }));
ROUTES.forEach(route => {
  app.get(route, (req, res) => {
    console.time(`GET: ${req.originalUrl}`);
    res.render('../dist/index', {
      req: req,
      res: res,
    });
    console.timeEnd(`GET: ${req.originalUrl}`);
  });
});

app.use('/api', jsonServer.router('/Users/collin/code/hdc/smartthings-dashboard/src/api/db.json'));

app.listen(8000, () => {
  console.log(`Listening at ${baseUrl}`);
});
