import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasoinicialPage } from './pasoinicial.page';

describe('PasoinicialPage', () => {
  let component: PasoinicialPage;
  let fixture: ComponentFixture<PasoinicialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasoinicialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasoinicialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
