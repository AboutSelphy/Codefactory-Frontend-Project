import { Component } from '@angular/core';
import { events } from './events';
import { IEvents } from './Ievents';
import { Router } from '@angular/router';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.sass']
})
export class EventsComponent {
  events: IEvents[] = events;

}
