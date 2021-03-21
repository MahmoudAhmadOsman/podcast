import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
//import { Student } from './../student';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {
 

  constructor(private http: HttpClientModule) { }
  
  

  getPodCastList(): Observable<any> {
   const baseUrl = "/assets/data/podcast.json";
    return this.http.get(baseUrl);
  }
  


}
