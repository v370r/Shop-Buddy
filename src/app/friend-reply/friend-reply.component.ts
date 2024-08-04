import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friend-reply',
  templateUrl: './friend-reply.component.html',
  styleUrls: ['./friend-reply.component.scss']
})
export class FriendReplyComponent {
  product: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.product = navigation?.extras?.state?.['element'];
  }

  ngOnInit(): void {}
}
