import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendrequestComponent } from './friendrequest.component';

describe('FriendrequestComponent', () => {
  let component: FriendrequestComponent;
  let fixture: ComponentFixture<FriendrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FriendrequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
