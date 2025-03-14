import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatigiornalieriComponent } from './datigiornalieri.component';

describe('DatigiornalieriComponent', () => {
  let component: DatigiornalieriComponent;
  let fixture: ComponentFixture<DatigiornalieriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatigiornalieriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatigiornalieriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
