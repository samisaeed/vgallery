import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VideosService } from '../videos.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})


export class ViewComponent implements OnInit {

  video;
  id;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private videosservice: VideosService) {

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.videosservice.get(this.id).valueChanges()
        //   .pipe(take(1))
        .subscribe(p => this.video = p), take(1);
    }

  }

  player: YT.Player;
  private p = 'qDuKsiwS5xw';

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }

  ngOnInit() {
  }

}
