import { Component, OnInit } from '@angular/core';
import { Istories } from '../istories';
import { ActivatedRoute, Params } from '@angular/router';
import { stories } from '../stories';

@Component({
  selector: 'app-stories-details',
  templateUrl: './stories-details.component.html',
  styleUrls: ['./stories-details.component.sass']
})
export class StoriesDetailsComponent implements OnInit {
  stories: Istories = {} as Istories;
  id: number = 0

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.id= +params["id"]
      this.stories = stories[this.id]
    })
  }
}
