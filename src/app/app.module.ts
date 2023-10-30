import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AlumniComponent } from './alumni/alumni.component';
import { EventsComponent } from './events/events.component';
import { StoriesComponent } from './stories/stories.component';
import { CareersComponent } from './careers/careers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SingleventComponent } from './singlevent/singlevent.component';
import { SinglealumniComponent } from './singlealumni/singlealumni.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlumniComponent,
    EventsComponent,
    StoriesComponent,
    CareersComponent,
    NavbarComponent,
    FooterComponent,
    SingleventComponent,
    SinglealumniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
