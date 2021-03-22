import { async } from '@angular/core/testing';
import { PodcastService } from './../../services/podcast.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent implements OnInit {
 
  public podcasts_data: any;
  podcast_id: number;
  podcast_name: string;
  pod_parent_id: number;
  constructor(private podCast: PodcastService) {
    podCast.getPodCastList().subscribe(
      (res) => {
        console.log(res);
        this.podcast_id = res.id
        this.podcast_name = res.name
        this.pod_parent_id = res.parent_id
        this.podcasts_data =  res.podcasts;
      },
      (err) => {
        console.log("oops, error has occured: ", err);
      }
    )
   }
 
  ngOnInit(): void {
   console.log("DATA", this.data)
  }

}
