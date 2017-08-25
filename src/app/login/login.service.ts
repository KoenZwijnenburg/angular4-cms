import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class LoginService {
  public user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  login(formValues: { username: string, password: string }): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      this.afAuth.auth.signInWithEmailAndPassword(formValues.username, formValues.password).then(res => {
        observer.next(res);
        observer.complete();
      }).catch(error => {
        observer.error(error);
      });
    });
  }

  logout() {
    this.afAuth.auth.signOut().then(action => {
        localStorage.removeItem('login');
      }
    );
  }

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
