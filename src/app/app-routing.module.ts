import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { SubmitItemComponent } from './submit-item/submit-item.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'forgot_password', component: ForgotPasswordComponent
  },
  {
    path: 'sign_up', component: SignUpComponent
  },
  {
    path: 'item_details/:id', component: ItemDetailsComponent
  },
  {
    path: 'submit_item', component: SubmitItemComponent
  },
  {
    path: 'history', component: HistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
