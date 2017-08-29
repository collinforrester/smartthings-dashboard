import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// import { HomeView } from './home/home-view.component';
import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';
import { HomeComponent } from './home/home.component';
import { CustomAppMaterialModule } from './custom-app-material/custom-app-material.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

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
    RouterModule.forRoot([
      { path: '', component: AppComponent, pathMatch: 'full'},
      { path: 'home', component: HomeComponent, pathMatch: 'full'}
      // { path: 'lazy', loadChildren: './+lazy/lazy.module#LazyModule'}
    ]),
    CustomAppMaterialModule,
    NoopAnimationsModule
  ],
  providers: [],
  exports: [
    AppComponent
  ]
})
export class AppModule { }
