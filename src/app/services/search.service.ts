import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private intialSearchData = new BehaviorSubject([]);
  currentSearchData = this.intialSearchData.asObservable();

  constructor( private http : HttpClient ) {
    this.searchVideos();
  }
  

  searchVideos(){
    let searchData:any = []
    try{
      this.http.get('../../assets/json/data.json').subscribe(item => {
        let resData:any = item;
        let listData = resData.items;
        listData.forEach((element:any) => {
          if(element.type === "video"){
            searchData.push(element);
          }
        });
        this.intialSearchData.next(searchData)
      })
    }
    catch(err){
      console.log(err)
    }
  }

  globalSearch(srchText:any){
    if(!!srchText){
      const headers = { 
        'X-RapidAPI-Key': ' ', // Your API
        'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
      }
      try{
        this.http.get('https://youtube-search-results.p.rapidapi.com/youtube-search?q='+srchText.searchText, { headers }).subscribe(item => {
          let resData:any = item;
          console.log(resData, 'resData')
          /* let listData = resData.items;
          listData.forEach((element:any) => {
            if(element.type === "video"){
              searchData.push(element);
            }
          });
          this.intialSearchData.next(searchData) */
        })
      }
      catch(err){
        console.log(err)
      }
    }
  }

}
