import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaarticulosComponent } from './consultaarticulos.component';

describe('ConsultaarticulosComponent', () => {
  let component: ConsultaarticulosComponent;
  let fixture: ComponentFixture<ConsultaarticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaarticulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaarticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
