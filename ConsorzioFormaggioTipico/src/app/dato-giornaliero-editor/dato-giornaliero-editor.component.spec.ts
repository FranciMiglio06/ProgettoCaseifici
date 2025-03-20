import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatoGiornalieroEditorComponent } from './dato-giornaliero-editor.component';

describe('DatoGiornalieroEditorComponent', () => {
  let component: DatoGiornalieroEditorComponent;
  let fixture: ComponentFixture<DatoGiornalieroEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatoGiornalieroEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatoGiornalieroEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
