import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { AppUser } from '../models/appUser';




@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  // user$: Observable<firebase.User>;
  appUser: AppUser;

  constructor(public auth: AuthService,
  ) {
    // afAuth.authState.subscribe(user => this.user = user);
    // this.user$ = afAuth.authState;
  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  logout() {
    this.auth.logout();
  }
}
