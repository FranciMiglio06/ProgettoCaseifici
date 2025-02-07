import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseificioComponent } from './caseificio.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('CaseificioComponent', () => {
  let component: CaseificioComponent;
  let fixture: ComponentFixture<CaseificioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseificioComponent,
      CommonModule,FormsModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaseificioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
