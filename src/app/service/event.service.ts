import { Injectable } from '@angular/core';
import { TransferHttp } from '../../modules/transfer-http/transfer-http';

@Injectable()
export class EventService {

  constructor(private http: TransferHttp) { }

  getEvents(options: { query: string } = { query: '' }) {
    return this.http
      .get(`/api/events?q=${options.query}&_sort=date&_order=desc&_limit=25`);
  }
}
