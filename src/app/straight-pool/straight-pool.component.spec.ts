import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StraightPoolComponent } from './straight-pool.component';

describe('StraightPoolComponent', () => {
  let component: StraightPoolComponent;
  let fixture: ComponentFixture<StraightPoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StraightPoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StraightPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
