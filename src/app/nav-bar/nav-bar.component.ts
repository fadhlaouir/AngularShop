import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase'
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  user: firebase.User

  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(userResponse => {
      if (userResponse) this.user = userResponse
    })
  }

  logOut() {
    this.afAuth.signOut()
  }

}
