import { Observable } from 'rxjs/Observable';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { Store } from '@ngrx/store';

import { State } from '../../state';
import {
  FetchTrailAction,
  SelectTrailAction,
  Trail,
  getSelectedTrail
} from '../../trails';

@Component({
  selector: 'trl-trail-conditions-detail-container',
  templateUrl: './trail-conditions-detail-container.component.html',
  styleUrls: ['./trail-conditions-detail-container.component.scss']
})
export class TrailConditionsDetailContainerComponent
  implements OnInit, OnDestroy {

  private slugParamSubscription: Subscription;

  trail: Observable<Trail>;

  constructor(
    private route: ActivatedRoute,
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
    // this.slugParamSubscription.unsubscribe();
  }

}
