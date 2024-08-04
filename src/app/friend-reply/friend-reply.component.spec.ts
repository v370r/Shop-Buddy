import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendReplyComponent } from './friend-reply.component';

describe('FriendReplyComponent', () => {
  let component: FriendReplyComponent;
  let fixture: ComponentFixture<FriendReplyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FriendReplyComponent]
    });
    fixture = TestBed.createComponent(FriendReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
