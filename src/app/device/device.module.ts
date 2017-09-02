import { RouterModule } from '@angular/router';
import { DeviceComponent } from './device.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DeviceComponent, pathMatch: 'full'}
    ])
  ],
  declarations: [
    DeviceComponent
  ]
})
export class DeviceModule { }
