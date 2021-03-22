import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PodcastService {
 

  constructor(private http: HttpClient) { }
  
   getPodCastList(): Observable<any> {
    const baseUrl = "/assets/data/podcast.json";
    return this.http.get(baseUrl);
  }
  


}
