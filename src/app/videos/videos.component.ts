import { Router, ActivatedRoute } from '@angular/router';
import { VideosService } from './../videos.service';


import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  video = {};
  id;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private videoService: VideosService) {


    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.videoService.get(this.id).valueChanges()
        //   .pipe(take(1))
        .subscribe(p => this.video = p), take(1);
    }

  }
  save(video) {
    if (this.id) {
      this.videoService.update(this.id, video);
    } else { this.videoService.create(video); }

    this.router.navigate(['/']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this product')) { return; }

    this.videoService.delete(this.id);
    this.router.navigate(['/']);
  }



  ngOnInit() {
  }

}


