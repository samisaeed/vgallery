import { Videos } from './../models/videos';
import { VideosService } from './../videos.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Component, } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vgallery',
  templateUrl: './vgallery.component.html',
  styleUrls: ['./vgallery.component.css']
})
export class VgalleryComponent {

   Videos$: Observable<any[]>;

  // Videos$;


  constructor(private videosservce: VideosService) {
    this.Videos$ = videosservce.getAll().snapshotChanges();
  }


}
