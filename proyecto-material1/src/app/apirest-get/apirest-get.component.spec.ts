import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApirestGetComponent } from './apirest-get.component';

describe('ApirestGetComponent', () => {
  let component: ApirestGetComponent;
  let fixture: ComponentFixture<ApirestGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApirestGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApirestGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
