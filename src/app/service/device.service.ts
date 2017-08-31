import { Injectable } from '@angular/core';
import { TransferHttp } from '../../modules/transfer-http/transfer-http';
import { Request } from 'express';
import { REQUEST } from '@nguniversal/express-engine/tokens';

@Injectable()
export class DeviceService {

  constructor(private http: TransferHttp) { }

  getDevices() {
    return this.http.get(`/api/devices`);
  }
}
