import {
  Component,
  Directive,
  HostBinding,
  ViewEncapsulation
} from '@angular/core';

@Directive({
  selector: '[trlAvatar]'
})
export class AvatarDirective {

  @HostBinding('class.trl-avatar') cssClassName = true;

}

@Component({
  selector: '[trlAvatar]',
  styleUrls: ['./avatar.component.scss'],
  template: '',
  encapsulation: ViewEncapsulation.None
})
export class AvatarComponent { }
