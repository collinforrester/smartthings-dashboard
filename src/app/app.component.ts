import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { TransferState } from '../modules/transfer-state/transfer-state';
import { TransferHttp } from '../modules/transfer-http/transfer-http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public devices: Observable<string>;
  constructor(private http: TransferHttp, private cache: TransferState) {
  }
  ngOnInit() {
    this.cache.set('cached', true);
    // this.devices = this.http.get('http://localhost:8000/devices')
    //   .map(devices => {
    //     return devices.map(d => `${d.id} - ${d.title} (${d.author})`).join(',');
    //   });
  }
}
