import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-video-suggestion',
  templateUrl: './video-suggestion.component.html',
  styleUrls: ['./video-suggestion.component.css']
})
export class VideoSuggestionComponent implements OnInit {

  videoSugListData:any = [];

  constructor( private searchService:SearchService, private transferService:TransferService, private router:Router) {
    this.searchService.currentSearchData.subscribe(data => this.videoSugListData = data);
  }

  ngOnInit(): void {
  }

  playVideo(data:any){
    this.transferService.updateVideoData(data);
    this.router.navigate(['/player']);
  }

}
