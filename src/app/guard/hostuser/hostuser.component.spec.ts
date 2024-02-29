import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostuserComponent } from './hostuser.component';

describe('HostuserComponent', () => {
  let component: HostuserComponent;
  let fixture: ComponentFixture<HostuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
