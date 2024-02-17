import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderdataComponent } from './placeholderdata.component';

describe('PlaceholderdataComponent', () => {
  let component: PlaceholderdataComponent;
  let fixture: ComponentFixture<PlaceholderdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaceholderdataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaceholderdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
