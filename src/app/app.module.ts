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
import { DataService } from './shared/data/data.service';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { LightboxComponent } from './lightbox/lightbox.component';
import { ImageComponent } from './image/image.component';
import { NavComponent } from './nav/nav.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'commercial', component: CommercialComponent },
  { path: 'narrative', component: NarrativeComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'lightbox/:type/:index', component: LightboxComponent, outlet: 'popup' },
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
    PhotosComponent,
    LoaderComponent,
    LightboxComponent,
    ImageComponent,
    NavComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    // other imports here
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
