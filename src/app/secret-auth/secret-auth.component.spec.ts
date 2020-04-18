import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretAuthComponent } from './secret-auth.component';

describe('SecretAuthComponent', () => {
  let component: SecretAuthComponent;
  let fixture: ComponentFixture<SecretAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
