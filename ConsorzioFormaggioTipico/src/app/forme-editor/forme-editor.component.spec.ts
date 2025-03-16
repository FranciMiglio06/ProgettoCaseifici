import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeEditorComponent } from './forme-editor.component';

describe('FormeEditorComponent', () => {
  let component: FormeEditorComponent;
  let fixture: ComponentFixture<FormeEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormeEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
