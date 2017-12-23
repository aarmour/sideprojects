import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'trl-app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.scss']
})
export class AppToolbarComponent {

  @Input() label: string;
  @Input() showBackButton = false;

  @Output() goBack = new EventEmitter();

  constructor() { }

}
