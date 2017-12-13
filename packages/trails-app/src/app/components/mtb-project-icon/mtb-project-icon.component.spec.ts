import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtbProjectIconComponent } from './mtb-project-icon.component';

describe('MtbProjectIconComponent', () => {
  let component: MtbProjectIconComponent;
  let fixture: ComponentFixture<MtbProjectIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtbProjectIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtbProjectIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
