import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlumniComponent } from './alumni/alumni.component';
import { CareersComponent } from './careers/careers.component';
import { EventsComponent } from './events/events.component';
import { StoriesComponent } from './stories/stories.component';
import { SinglealumniComponent } from './singlealumni/singlealumni.component';
import { SingleCareerComponent } from './single-career/single-career.component';
import { SingleventComponent } from './singlevent/singlevent.component';
import { StoriesDetailsComponent } from './stories-details/stories-details.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "alumni", component: AlumniComponent
  },
  {
    path: "alumni/:id", component: SinglealumniComponent
  },
  {
    path: "events", component: EventsComponent
  },
  {
    path: "events/:id", component: SingleventComponent
  },
  {
    path: "careers", component: CareersComponent
  },
  {
    path: "careers/:id", component: SingleCareerComponent
  },
  {
    path: "stories", component: StoriesComponent
  },
  {
    path: "stories/:id", component: StoriesDetailsComponent
  },
  {
    path: "**", redirectTo: ""
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
