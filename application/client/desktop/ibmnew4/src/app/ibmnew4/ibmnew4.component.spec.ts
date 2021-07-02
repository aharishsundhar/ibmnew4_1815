import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ibmnew4Component } from './ibmnew4.component';

describe('Ibmnew4Component', () => {
  let component: Ibmnew4Component;
  let fixture: ComponentFixture<Ibmnew4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ibmnew4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ibmnew4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});