import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailConditionTextComponent } from './trail-condition-text.component';

describe('TrailConditionTextComponent', () => {
  let component: TrailConditionTextComponent;
  let fixture: ComponentFixture<TrailConditionTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailConditionTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailConditionTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
