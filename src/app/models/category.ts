export interface Category {

  id:number;
  name:string;
  status:boolean=false;

}

export class CategoryModel {

  id:number;
  name:string;
  status:boolean=false;

  constructor(values: Object = {}) {
      Object.assign(this, values);
  }


}
