import * as rp from 'request-promise';
import * as request from 'request';
// import * as db from './db';
const base = 'http://localhost:3000';

export class App {
  getDevices() {
    return [
      { id: 1, title: 'json-server', author: 'typicode' }
    ];
  }
}
