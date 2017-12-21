import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Store } from '@ngrx/store';

import { State } from '../../state';
import { ListPushAction } from '../../firebase';
import {
  FetchTrailAction,
  SelectTrailAction,
  Trail,
  getSelectedTrail
} from '../../trails';

@Component({
  selector: 'trl-trail-conditions-edit-container',
  templateUrl: './trail-conditions-edit-container.component.html',
  styleUrls: ['./trail-conditions-edit-container.component.scss']
})
export class TrailConditionsEditContainerComponent
  implements OnInit, OnDestroy {

  private slugParamSubscription: Subscription;

  maxDate = new Date();

  trail: Observable<Trail>;

  date = new Date();
  condition: string;
  hazardWater = false;
  hazardSnow = false;
  hazardSneks = false;
  notes: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store<State>
  ) {
    this.trail = this.store.select(getSelectedTrail);
  }

  ngOnInit() {
    this.slugParamSubscription = this.route.paramMap
      .map((params: ParamMap) => params.get('slug'))
      .subscribe((slug: string) => {
        this.store.dispatch(new FetchTrailAction(slug));
        this.store.dispatch(new SelectTrailAction(slug));
      });
  }

  ngOnDestroy() {
    this.slugParamSubscription.unsubscribe();
  }

  get data() {
    return {
      date: this.date.toISOString(),
      condition: this.condition,
      hazardSneks: this.hazardSneks,
      hazardSnow: this.hazardSnow,
      hazardWater: this.hazardWater,
      notes: this.notes
    };
  }

  goBack() {
    this.location.back();
  }

  save(key: string) {
    const path = `trailConditions/${key}`;
    this.store.dispatch(new ListPushAction({ path, data: this.data }));
  }

  selectToday() {
    this.date = new Date();
  }
}
