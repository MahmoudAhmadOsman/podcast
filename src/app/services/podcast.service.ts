import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PodcastService {
 

  constructor(private http: HttpClient) { }
  
   getPodCastList(): Observable<any> {
    const baseUrl = "/assets/data/podcast.json";
     return this.http.get(baseUrl)
       .pipe(catchError(this.handleError))
  }
  
  //Handle server error
  handleError(error) {
    return throwError(error.message || "Server Error has occurred!")
  }

}
