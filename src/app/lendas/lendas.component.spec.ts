import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendasComponent } from './lendas.component';

describe('LendasComponent', () => {
  let component: LendasComponent;
  let fixture: ComponentFixture<LendasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LendasComponent]
    });
    fixture = TestBed.createComponent(LendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
