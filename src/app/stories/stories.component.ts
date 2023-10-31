import { Component } from '@angular/core';
import { Istories } from '../istories';
import { stories } from '../stories';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.sass']
})
export class StoriesComponent {
  stories: Array<Istories> = stories

  constructor(){}

}
