import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { HomeComponent } from './home.component';
import { VideoCollectionComponent } from './video-collection.component';
import { VideoService,
         VideoGridComponent,
         VideoPlayerComponent,
         VideoWidgetComponent,
         VideoWidgetPlaylistComponent,
         VideoDetailComponent } from './videos';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    VideoCollectionComponent,
    VideoPlayerComponent,
    VideoWidgetComponent,
    VideoWidgetPlaylistComponent,
    VideoGridComponent,
    VideoDetailComponent,
  ],
  providers: [ VideoService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
