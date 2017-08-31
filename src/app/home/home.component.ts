import { ISmartThingDevice } from './../ismart-thing-device';
import { Observable } from 'rxjs/Observable';
import { DeviceService } from './../service/device.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public devices: Observable<ISmartThingDevice>;
  constructor(private DeviceService: DeviceService) { }

  ngOnInit() {
    this.DeviceService.getDevices()
      .subscribe(data => {
        this.devices = data;
      });
  }

}
