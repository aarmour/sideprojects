import { Injectable } from '@angular/core';

import {
  AngularFireDatabase,
  AngularFireList
} from 'angularfire2/database';

import { Trail } from './state';

@Injectable()
export class TrailListService {

  private _listRef: AngularFireList<Trail>;
  get listRef() {
    return this._listRef;
  }

  constructor(private db: AngularFireDatabase) {
    this._listRef = db.list<Trail>(TrailListService.PATH);
  }

  static get PATH() {
    return 'trails';
  }

}
