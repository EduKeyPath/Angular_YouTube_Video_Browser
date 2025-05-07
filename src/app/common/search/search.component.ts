import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
  }

  searchVideos(val:string){
    this.searchService.globalSearch(val);
  }

}
