import { EventService } from './../service/event.service';
import { ISmartThingEvent } from './../interfaces/ismart-thing-event';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private queryKey = 'q';
  public events: Observable<ISmartThingEvent>;
  public query = '';
  constructor(private EventService: EventService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute
      .queryParams
      .subscribe((params: Params) => {
          if (params[this.queryKey]) {
            this.query = params[this.queryKey];
          }
        });

    this.search();
  }

  clear() {
    this.query = '';
  }

  search() {
    this.EventService.getEvents({
      query: this.query
    })
      .subscribe(data => {
        this.events = data;
      });
  }

  onSubmit() {
    const queryParams = {};
    queryParams[this.queryKey] = this.query;
    this.router.navigate(['events'], { queryParams });
    this.search();
  }

}
