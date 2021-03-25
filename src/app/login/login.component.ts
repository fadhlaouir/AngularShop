import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import firebase from 'firebase'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private afAuth: AngularFireAuth) { }

  loginWithGoogle() {
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }
}
