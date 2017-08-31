import { ServiceModule } from './service/service.module';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// import { HomeView } from './home/home-view.component';
import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';
import { HomeComponent } from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    // HomeView
  ],
  imports: [
    CommonModule,
    HttpModule,
    TransferHttpModule,
    ServiceModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'}
      // { path: 'lazy', loadChildren: './+lazy/lazy.module#LazyModule'}
    ]),
    NgbModule.forRoot()
  ],
  providers: [],
  exports: [
    AppComponent
  ]
})
export class AppModule { }
