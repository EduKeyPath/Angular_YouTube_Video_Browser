import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoSuggestionComponent } from './components/video-suggestion/video-suggestion.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { SearchComponent } from './common/search/search.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { SafePipe } from './pipes/safe.pipe';
import { TitleChrPipe } from './pipes/title-chr.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoListComponent,
    VideoSuggestionComponent,
    VideoPlayerComponent,
    SearchComponent,
    VideoDetailsComponent,
    SafePipe,
    TitleChrPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
