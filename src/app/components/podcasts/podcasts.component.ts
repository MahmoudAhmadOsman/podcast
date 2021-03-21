import { PodcastService } from './../../services/podcast.service';
// import { Student } from './../../student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent implements OnInit {
  title: string = 'Podcats';
  public podcasts: any[];

  constructor(private podCast: PodcastService) {
    podCast.getPodCastList().subscribe(
      (res) => {
        console.log(res);
      
        this.podcasts = res;
      },
      (err) => {
        console.log("error", err);
      }
    )
   }
 
  ngOnInit(): void {
   
  }

}
