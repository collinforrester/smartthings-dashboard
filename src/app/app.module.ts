import { ServiceModule } from './service/service.module';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';
import { HomeComponent } from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    TransferHttpModule,
    ServiceModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/events', pathMatch: 'full'},
      { path: 'events', component: HomeComponent, pathMatch: 'full'},
      { path: 'devices', loadChildren: './device/device.module#DeviceModule'}
    ]),
    NgbModule.forRoot()
  ],
  providers: [],
  exports: [
    AppComponent
  ]
})
export class AppModule { }
