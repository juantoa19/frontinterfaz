import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacionTextoComponent } from './organizacion-texto.component';

describe('OrganizacionTextoComponent', () => {
  let component: OrganizacionTextoComponent;
  let fixture: ComponentFixture<OrganizacionTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizacionTextoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizacionTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
