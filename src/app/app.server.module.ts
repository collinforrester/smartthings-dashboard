import { NgModule, APP_BOOTSTRAP_LISTENER, ApplicationRef } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ServerTransferStateModule } from '../modules/transfer-state/server-transfer-state.module';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { TransferState } from '../modules/transfer-state/transfer-state';
import { ServerPrebootModule, PREBOOT_RECORD_OPTIONS } from 'preboot/server';
import { BrowserModule } from '@angular/platform-browser';

export function onBootstrap(appRef: ApplicationRef, transferState: TransferState) {
  return () => {
    appRef.isStable
      .subscribe(() => {
        transferState.inject();
      });
  };
}

@NgModule({
  bootstrap: [AppComponent],
  providers: [
    {
      provide: APP_BOOTSTRAP_LISTENER,
      useFactory: onBootstrap,
      multi: true,
      deps: [
        ApplicationRef,
        TransferState
      ]
    },
    { provide: 'ORIGIN_URL', useValue: 'http://localhost:8000' }
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'smartthings'
    }),
    ServerPrebootModule.recordEvents({
      appRoot: 'app-root'
      // eventSelectors: [{
      //   selector: 'body',
      //   events: ['click'],
      //   freeze: true
      // }]
    }),
    ServerModule,
    ServerTransferStateModule,
    AppModule
  ]
})
export class AppServerModule {

}
