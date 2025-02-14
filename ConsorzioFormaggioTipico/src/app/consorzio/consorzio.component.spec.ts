import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsorzioComponent } from './consorzio.component';

describe('ConsorzioComponent', () => {
  let component: ConsorzioComponent;
  let fixture: ComponentFixture<ConsorzioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsorzioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsorzioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
