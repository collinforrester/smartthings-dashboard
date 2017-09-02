import { Injectable } from '@angular/core';
import { TransferHttp } from '../../modules/transfer-http/transfer-http';

@Injectable()
export class DeviceService {

  constructor(private http: TransferHttp) { }

  getDevices() {
    return this.http.get(`/api/devices`);
  }
}
