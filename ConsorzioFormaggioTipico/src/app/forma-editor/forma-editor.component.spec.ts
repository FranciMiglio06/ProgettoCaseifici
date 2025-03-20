import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaEditorComponent } from './forma-editor.component';

describe('FormaEditorComponent', () => {
  let component: FormaEditorComponent;
  let fixture: ComponentFixture<FormaEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormaEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormaEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
