import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseificioEditorComponent } from './caseificio-editor.component';

describe('CaseificioEditorComponent', () => {
  let component: CaseificioEditorComponent;
  let fixture: ComponentFixture<CaseificioEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseificioEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaseificioEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
