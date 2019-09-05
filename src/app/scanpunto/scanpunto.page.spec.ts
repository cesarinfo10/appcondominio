import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanpuntoPage } from './scanpunto.page';

describe('ScanpuntoPage', () => {
  let component: ScanpuntoPage;
  let fixture: ComponentFixture<ScanpuntoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanpuntoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanpuntoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
