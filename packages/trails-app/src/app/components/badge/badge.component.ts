import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'trl-badge',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  @Input() @HostBinding('style.backgroundColor') color: string;
}
