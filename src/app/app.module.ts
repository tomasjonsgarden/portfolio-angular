import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NarrativeComponent } from './narrative/narrative.component';
import { CommercialComponent } from './commercial/commercial.component';
import { PhotographyComponent } from './photography/photography.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { VideosComponent } from './videos/videos.component';
import { PhotosComponent } from './photos/photos.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'commercial', component: CommercialComponent },
  { path: 'narrative', component: NarrativeComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
    NarrativeComponent,
    CommercialComponent,
    PhotographyComponent,
    PageNotFoundComponent,
    JumbotronComponent,
    VideosComponent,
    PhotosComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    // other imports here
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
