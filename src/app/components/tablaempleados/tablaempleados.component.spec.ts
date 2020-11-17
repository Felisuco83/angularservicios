import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaempleadosComponent } from './tablaempleados.component';

describe('TablaempleadosComponent', () => {
  let component: TablaempleadosComponent;
  let fixture: ComponentFixture<TablaempleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaempleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
