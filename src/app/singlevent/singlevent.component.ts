import { Component, OnInit } from '@angular/core';
import { IEvents } from '../events/Ievents';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { events } from '../events/events';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-singlevent',
  templateUrl: './singlevent.component.html',
  styleUrls: ['./singlevent.component.sass']
})
export class SingleventComponent {
  event: IEvents = {} as IEvents;
  id: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = param['id'];
      this.event = events[this.id];
    });
  }

  alert(event: Event){
    event.preventDefault()
    Swal.fire({
      title: 'Thank You for Registering!',
      text: 'You have successfully registered for the event.',
      icon: 'success',
      confirmButtonText: 'OK'
  });
  
  }
}
