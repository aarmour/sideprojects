import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class FirebaseListRegistry {

  private cache = new Map<string, AngularFireList<any>>();

  constructor(private db: AngularFireDatabase) { }

  has(path: string): boolean {
    return this.cache.has(path);
  }

  get(path: string): AngularFireList<any> {
    return this.cache.get(path);
  }

  register(path: string): AngularFireList<any> {
    if (!path) {
      throw new TypeError(`Path cannot be an empty string`);
    }

    if (!this.has(path)) {
      const listRef = this.db.list(path);
      this.cache.set(path, listRef);
    }

    return this.get(path);
  }

}
