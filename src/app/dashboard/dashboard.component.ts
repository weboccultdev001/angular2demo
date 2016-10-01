import { Component, OnInit } from '@angular/core';
import { AngularFire,
   FirebaseListObservable ,
   FirebaseObjectObservable,
   FirebaseAuth,
   AuthMethods,
   AuthProviders,
   firebaseAuthConfig
} from 'angularfire2';
import * as firebase from 'firebase';

import { User } from '../users/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   items: FirebaseListObservable<User[]>;

   constructor(af:AngularFire,public auth:FirebaseAuth) {

     this.auth.login({
       provider: AuthProviders.Anonymous,
       method: AuthMethods.Anonymous,
     });

      this.items = af.database.list('/items');
   }

  ngOnInit() {
  }

}
