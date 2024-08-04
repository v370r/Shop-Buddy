import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpFriendComponent } from './help-friend.component';

describe('HelpFriendComponent', () => {
  let component: HelpFriendComponent;
  let fixture: ComponentFixture<HelpFriendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpFriendComponent]
    });
    fixture = TestBed.createComponent(HelpFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
