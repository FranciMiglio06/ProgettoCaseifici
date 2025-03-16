import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagionatureEditorComponent } from './stagionature-editor.component';

describe('StagionatureEditorComponent', () => {
  let component: StagionatureEditorComponent;
  let fixture: ComponentFixture<StagionatureEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StagionatureEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StagionatureEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
