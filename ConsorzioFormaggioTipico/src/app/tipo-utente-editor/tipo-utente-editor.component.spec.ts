import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoUtenteEditorComponent } from './tipo-utente-editor.component';

describe('TipoUtenteEditorComponent', () => {
  let component: TipoUtenteEditorComponent;
  let fixture: ComponentFixture<TipoUtenteEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoUtenteEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoUtenteEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
