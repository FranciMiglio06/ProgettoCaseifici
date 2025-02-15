import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseificiComponent } from './caseifici.component';

describe('CaseificiComponent', () => {
  let component: CaseificiComponent;
  let fixture: ComponentFixture<CaseificiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseificiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaseificiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
