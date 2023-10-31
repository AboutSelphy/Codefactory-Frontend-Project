import { Component } from '@angular/core';
import { Ic_Alumni } from './alumni_interface';
import { alumni } from './alumi_person';


@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.sass']
})


export class AlumniComponent {
  cardArr : Ic_Alumni[] = alumni;
}
