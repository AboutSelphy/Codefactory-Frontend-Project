import { Component } from '@angular/core';
import { c_AdviceArticles } from '../careers/c_AdviceArticles';
import { iC_AdviceArticles } from '../careers/iC_AdviceArticles';


@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.sass']
})



export class CareersComponent {
  c_Articles : iC_AdviceArticles[] = c_AdviceArticles
}
