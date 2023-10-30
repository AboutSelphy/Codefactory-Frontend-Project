import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; 
import { c_AdviceArticles } from '../careers/c_AdviceArticles';
import { iC_AdviceArticles } from '../careers/iC_AdviceArticles';

@Component({
  selector: 'app-single-career',
  templateUrl: './single-career.component.html',
  styleUrls: ['./single-career.component.sass']
})
export class SingleCareerComponent implements OnInit {
  article : iC_AdviceArticles = {} as iC_AdviceArticles
  id : number = 0
  
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params)
      this.id = params['id'] - 1;
      this.article = c_AdviceArticles[this.id];
    });
  }


}
