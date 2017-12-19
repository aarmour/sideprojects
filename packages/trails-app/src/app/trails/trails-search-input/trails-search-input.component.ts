import { Observable } from 'rxjs/Observable';

import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'trl-trails-search-input',
  templateUrl: './trails-search-input.component.html',
  styleUrls: ['./trails-search-input.component.scss']
})
export class TrailsSearchInputComponent {

  searchInputControl: FormControl = new FormControl();

  @Input() options: Observable<any>;
  @Output() valueChanges = this.searchInputControl.valueChanges;

  @ViewChild('input') input: ElementRef;

  constructor() { }

  clear() {
    this.searchInputControl.setValue('');
  }

  focus() {
    this.input.nativeElement.focus();
  }

  getDisplay(item: any): string {
    return item ? item.name : item;
  }

}
