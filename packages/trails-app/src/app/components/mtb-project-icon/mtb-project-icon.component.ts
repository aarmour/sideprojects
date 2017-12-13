import { Component, Input } from '@angular/core';

@Component({
  selector: 'trl-mtb-project-icon',
  templateUrl: './mtb-project-icon.component.html',
  styleUrls: ['./mtb-project-icon.component.scss']
})
export class MtbProjectIconComponent {

  imgUrl = '/assets/mtb-project-logo.png';

  @Input() url: string;

}
