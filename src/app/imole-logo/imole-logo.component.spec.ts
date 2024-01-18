import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImoleLogoComponent } from './imole-logo.component';

describe('ImoleLogoComponent', () => {
  let component: ImoleLogoComponent;
  let fixture: ComponentFixture<ImoleLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImoleLogoComponent]
    });
    fixture = TestBed.createComponent(ImoleLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
