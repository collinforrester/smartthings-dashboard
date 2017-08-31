import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceService } from './device.service';
import { EventService } from './event.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [DeviceService, EventService]
})
export class ServiceModule { }
