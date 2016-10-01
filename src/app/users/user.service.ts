import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { User } from './user';
import { AngularFire,FirebaseListObservable} from 'angularfire2';

@Injectable()
export class UserService {

  private db: any;

  lastId:number=0;

  users:User[]=[];

  constructor(af:AngularFire) {

      this.db = af.database.object('/items');

   }

   getAll(): Observable<User> {
    return Observable.create(observer => {
      let listener = this.db.on('child_added', snapshot => {
        let data = snapshot.val();
        observer.next(new User(
          {
            id:snapshot.key(),
            name:data.name,
            password:data.password,
            email:data.email,
            status:data.status,
          }
        ));
      }, observer.error);

      return () => {
        this.db.off('child_added', listener);
      };
    });
  }


  add(user: User): UserService {
       if (!user.id) {
         user.id = ++this.lastId;
       }

       this.users.push(user);
       return this;
  }

  delete(id: number): UserService {
    this.users = this.users
      .filter(user => user.id !== id);
    return this;
  }

  update(id: number, values: Object = {}): User {
    let user = this.find(id);
    if (!user) {
      return null;
    }
    Object.assign(user, values);
    return user;
  }

  // getAll(): User[] {
  //   return this.users;
  // }

  find(id: number): User {
    return this.users
      .filter(user => user.id === id)
      .pop();
  }

  toggleStatus(user: User){
    let updatedUser = this.update(user.id, {
      status: !user.status
    });
    return updatedUser;
  }


}
