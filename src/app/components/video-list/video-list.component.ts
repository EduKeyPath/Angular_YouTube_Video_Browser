import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { TransferService } from 'src/app/services/transfer.service';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videoListData:any = [];
  

  constructor( private searchService:SearchService, private transferService:TransferService, private router:Router) {
    this.searchService.currentSearchData.subscribe(data => this.videoListData = data);
  }

  ngOnInit(): void {
  }

  playVideo(data:any){
    this.transferService.updateVideoData(data);
    this.router.navigate(['/player']);
  }

}
