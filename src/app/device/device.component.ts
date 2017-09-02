import { DeviceService } from './../service/device.service';
import { Observable } from 'rxjs/Observable';
import { ISmartThingDevice } from './../interfaces/ismart-thing-device';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  public devices: Observable<ISmartThingDevice>;
  constructor(private DeviceService: DeviceService) { }

  ngOnInit() {
    this.DeviceService.getDevices()
      .subscribe(data => {
        this.devices = data;
      });
  }

}
