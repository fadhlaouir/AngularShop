import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(x => console.log(x))
  }

  logOut() {
    this.afAuth.signOut()
  }

}
