import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Store } from '@ngrx/store';

import { State } from '../../state';
import { CreateTrailAction } from '../state';

@Component({
  selector: 'trl-create-trail-container',
  templateUrl: './create-trail-container.component.html',
  styleUrls: ['./create-trail-container.component.scss']
})
export class CreateTrailContainerComponent {

  name: string;
  slug: string;

  constructor(
    private location: Location,
    private store: Store<State>
  ) { }

  get data() {
    return { name: this.name, slug: this.slug };
  }

  create() {
    this.store.dispatch(new CreateTrailAction(this.data));
  }

  goBack() {
    this.location.back();
  }

}
