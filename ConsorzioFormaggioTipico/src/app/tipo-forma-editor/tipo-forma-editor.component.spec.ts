import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoFormaEditorComponent } from './tipo-forma-editor.component';

describe('TipoFormaEditorComponent', () => {
  let component: TipoFormaEditorComponent;
  let fixture: ComponentFixture<TipoFormaEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoFormaEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoFormaEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
