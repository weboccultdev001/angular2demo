import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {
  private domain='http://localhost:3000';

  private headers = new Headers({ 'Content-Type': 'application/json' });

  private options = new RequestOptions({ headers: this.headers });


    constructor(private http: Http) { }

    getCats() {
      return this.http.get(this.domain+'/cats').map(res => res.json());
    }

    addCat(cat) {
      return this.http.post(this.domain+"/cat", JSON.stringify(cat), this.options);
    }

    editCat(cat) {
      return this.http.put(`${this.domain}/cat/${cat._id}`, JSON.stringify(cat), this.options);
    }

    deleteCat(cat) {
      return this.http.delete(`${this.domain}/cat/${cat._id}`, this.options);
    }

}
