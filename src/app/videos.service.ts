import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(private db: AngularFireDatabase) { }
  create(video) {
    return this.db.list('/videos').push(video);

  }

  getAll() {
    return this.db.list('/videos');
  }

  get(videoId) {
    return this.db.object('/videos/' + videoId);

    // return this.db.list('items').snapshotChanges().pipe(
    //   map(actions =>
    //     actions.map(a => ({ key: a.key, ...a.payload.val() }))
    //   )
    // ).subscribe(items => {
    //   return items.map(item => item.key);
    // });
  }

  update(videoId, video) {
    return this.db.object('/videos/' + videoId).update;
  }

  delete(videoId) {
    return this.db.object('/videos/' + videoId).remove();
  }
}
