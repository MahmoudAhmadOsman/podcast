import { async } from '@angular/core/testing';
import { PodcastService } from './../../services/podcast.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent implements OnInit {
 
  
  public errorMessage: String = "An error occurred while making an api call";


  public listOfPodcast = [];

//Show loading indicator while fetching data from the api
  public loading = true;

  constructor(private podCast: PodcastService) {

    podCast.getPodCastList().subscribe(
      (res) => {
        console.log("List of Podcast data ", res);
        
     
        this.listOfPodcast = res.podcasts;


        //Set loading to false after data is fetched
        this.loading = false;
      },
      (err) => {
        console.log("An error has occured: ", err);
        this.errorMessage = err.message;

      }
    )
   }
 
  ngOnInit(): void {
 
  }

}
