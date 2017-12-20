import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import { State } from '../../state';
import { Trail, selectAllTrails, SelectTrailAction } from '../../trails';

@Component({
  selector: 'trl-trail-conditions-container',
  templateUrl: './trail-conditions-container.component.html',
  styleUrls: ['./trail-conditions-container.component.scss']
})
export class TrailConditionsContainerComponent {

  trails: Observable<any>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<State>
  ) {
    this.trails = this.store.select(selectAllTrails);
  }

  onSearchSelected(trail: Trail) {
    this.store.dispatch(new SelectTrailAction(trail.id));
    this.router.navigate(['./', trail.slug], { relativeTo: this.route });
  }

}
