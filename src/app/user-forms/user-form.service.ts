import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


export interface UserForm {
  key: string;
  type: string;
  label: string;
  minLength: number,
  required: boolean,
}


@Injectable()
export class UserFormService {

  constructor(public db: AngularFireDatabase) {
  }

  save(form) {
    return this.db.object('/forms/' + form.slug).set(form).then(() => {
      return true;
    }).catch(error => {
      return error;
    });
  }

  getAllForms() {
    return this.db.list('/forms').map(res => {
      res.created = new Date(res.created);
      res.edited = new Date(res.edited);
      return res;
    });
  }

  getSingleForm(id) {
    return this.db.object('/forms/' + id).map(res => {
      return res;
    });
  }


  add(form) {
    this.save(form);

  }

}
