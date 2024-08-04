import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HelpFriendComponent } from './help-friend/help-friend.component';
import { NeedHelpComponent } from './need-help/need-help.component';
import { FriendReplyComponent } from './friend-reply/friend-reply.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'help-friend', component: HelpFriendComponent },
  { path: 'need-help', component: NeedHelpComponent },
  { path: 'reply', component: FriendReplyComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
