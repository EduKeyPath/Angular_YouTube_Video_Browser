import { Component, OnInit } from '@angular/core';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  curVideoData:any;

  constructor(private transferService:TransferService) {
    this.transferService.currentVideoData.subscribe(data => this.curVideoData = data);
  }

  ngOnInit(): void {
  }

}
