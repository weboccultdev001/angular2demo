import { Component,Inject } from '@angular/core';
import { User } from './users/user';

import * as jQuery from 'jquery';

import { AngularFire,
   FirebaseListObservable ,
   FirebaseObjectObservable,
   FirebaseAuth,
   AuthMethods,
   AuthProviders,
   firebaseAuthConfig
} from 'angularfire2';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   items: FirebaseListObservable<User[]>;
 
   title = 'app works!';

  constructor(af:AngularFire,public auth:FirebaseAuth) {

    console.log(jQuery);

    this.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous,
    });

     this.items = af.database.list('/items');
  }

  public doLogin () {
   // This will perform popup auth with google oauth and the scope will be email
   // Because those options were provided through bootstrap to DI, and we're overriding the provider.
  }

}
