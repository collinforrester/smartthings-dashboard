import { Injectable } from '@angular/core';
import { TransferHttp } from '../../modules/transfer-http/transfer-http';

const urlBase = 'http://localhost:8000';

@Injectable()
export class DeviceService {

  constructor(private http: TransferHttp) { }

  getDevices() {
    return this.http.get(`${urlBase}/api/devices`);
  }
}
