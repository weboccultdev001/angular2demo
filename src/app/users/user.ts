export class User {

  id:number;
  name:string;
  password:string;
  email:string;
  status:boolean=false;

  constructor(values: Object = {}) {
      Object.assign(this, values);
  }


}
