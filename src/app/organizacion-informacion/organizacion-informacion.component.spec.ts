import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacionInformacionComponent } from './organizacion-informacion.component';

describe('OrganizacionInformacionComponent', () => {
  let component: OrganizacionInformacionComponent;
  let fixture: ComponentFixture<OrganizacionInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizacionInformacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizacionInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
