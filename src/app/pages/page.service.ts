import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

export interface Page {
  $key?: number;
  slug: string;
  title: string;
  body: string;
  dateEdited?: string;
  dateCreated?: string;
  img?: string;
  template?: string;
}

export const PageForm = {
  title: 'text',
  slug: 'text',

};

@Injectable()
export class PageService {

  constructor(public db: AngularFireDatabase) {
  }


  getPages() {
    return this.db.list('pages').map(res => {
      res.dateCreated = new Date(res.dateCreated);
      res.dateEdited = new Date(res.dateEdited);
      return res;
    });
  }

  getSinglePage(id) {
    return this.db.object('pages/' + id).map(res => {
      return res;
    });
  }

  editPage(id: string, updatedData) {
    const pageObservable = this.db.object('/pages/' + id);
    return pageObservable.update(updatedData);
  }

  newPage(page) {
    return this.db.object('/pages/' + page.slug).set(page).then(() => {
      return true;
    }).catch(error => {
      return error;
    });
  }

  removePage(id) {
    const pageObservable = this.db.object('/pages/' + id);

    return pageObservable.remove().then(() => {
      return true;
    }).catch(error => {
      return error;
    });
  }
}
