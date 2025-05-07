import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';


const routes: Routes = [
  {
    path : '',
    component : VideoListComponent,
  },
  {
    path : 'player',
    component : VideoDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
