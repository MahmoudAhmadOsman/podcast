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
  // public podcasts_data: any;
  // podcast_id: number;
  // podcast_name: string;
  // pod_parent_id: number;

  public listOfPodcast = [];

  constructor(private podCast: PodcastService) {

    podCast.getPodCastList().subscribe(
      (res) => {
        console.log(res);
        // this.podcast_id = res.id
        // this.podcast_name = res.name
        // this.pod_parent_id = res.parent_id
        this.listOfPodcast =  res.podcasts;
      },
      (err) => {
        console.log("Oops, an error has occured: ", err);
        this.errorMessage = err;

      }
    )
   }
 
  ngOnInit(): void {
 
  }

}
