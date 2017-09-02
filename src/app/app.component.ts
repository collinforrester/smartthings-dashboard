import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { TransferState } from '../modules/transfer-state/transfer-state';
import { TransferHttp } from '../modules/transfer-http/transfer-http';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public devices: Observable<string>;
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private http: TransferHttp, private cache: TransferState) {
  }
  ngOnInit() {
    this.cache.set('cached', true);
    if (isPlatformBrowser(this.platformId)) {
      console.log('[AppComponent]: executing in browser.');
    } else {
      console.log('[AppComponent]: executing on server.');
    }
  }
}
