import { Observable } from 'rxjs/Observable';
import { DeviceService } from './../service/device.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public devices: Observable<string>;
  constructor(private DeviceService: DeviceService) { }

  ngOnInit() {
    this.devices = this.DeviceService.getDevices()
      .map(devices => {
        return devices.map(d => `${d.id} - ${d.title} (${d.author})`).join(',');
      });
  }

}
