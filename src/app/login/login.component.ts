import { Component } from '@angular/core';
import { AuthService } from '../auth.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthService) {

  }
  // constructor(private afAuth: AngularFireAuth) { }



  login() {

    this.auth.login();


    // this.afAuth.auth.signInWithRedirect(provider);
  }
}
