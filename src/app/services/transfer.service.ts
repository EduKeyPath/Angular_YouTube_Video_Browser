import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private intialVideoData = new BehaviorSubject('');
  currentVideoData = this.intialVideoData.asObservable();

  constructor() { }

  updateVideoData(data: any) {
    let videoURL = '';
    let ytUrl = data.link;
    if(!!ytUrl){
      videoURL = ytUrl.replace('/watch?v=', '/embed/');
    }
    data.link = videoURL;
    this.intialVideoData.next(data)
  } 

}
