import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ic_Alumni } from '../alumni/alumni_interface';
import { alumni } from '../alumni/alumi_person';


@Component({
  selector: 'app-singlealumni',
  templateUrl: './singlealumni.component.html',
  styleUrls: ['./singlealumni.component.sass']
})
export class SinglealumniComponent implements OnInit {

  card : Ic_Alumni = {} as Ic_Alumni
  id : number = 0;

  
  constructor(private route: ActivatedRoute){}

  
  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
    this.id = +param["id"];
    this.card = alumni[this.id];
  })
}
}
