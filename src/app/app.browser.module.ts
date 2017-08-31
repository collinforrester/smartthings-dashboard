import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { BrowserTransferStateModule } from '../modules/transfer-state/browser-transfer-state.module';


@NgModule({
  bootstrap: [ AppComponent ],
  providers: [
    { provide: 'ORIGIN_URL', useValue: location.origin }
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'smartthings'
    }),
    BrowserTransferStateModule,
    AppModule
  ]
})
export class AppBrowserModule {}
