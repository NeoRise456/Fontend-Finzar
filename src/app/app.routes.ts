import { Routes } from '@angular/router';
import {DashboardComponent} from "./wallet/pages/dashboard/dashboard.component";
import {WalletViewComponent} from "./wallet/pages/wallet-view/wallet-view.component";
import {SavingsDashboardComponent} from "./savings/pages/savings-dashboard/savings-dashboard.component";
import {BudgetsDashboardComponent} from "./budgets/pages/budgets-dashboard/budgets-dashboard.component";
import {SavingsDetailComponent} from "./savings/pages/savings-detail/savings-detail.component";
import {SignInComponent} from "./iam/pages/sign-in/sign-in.component";
import {SignUpComponent} from "./iam/pages/sign-up/sign-up.component";
import {authenticationGuard} from "./iam/services/authentication.guard";

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [authenticationGuard] },
  { path: 'wallet/:id', component: WalletViewComponent, canActivate: [authenticationGuard] },
  {path: 'savings', component: SavingsDashboardComponent, canActivate: [authenticationGuard] },
  {path: 'saving/:id', component: SavingsDetailComponent, canActivate: [authenticationGuard] },
  {path: 'budgets', component: BudgetsDashboardComponent, canActivate: [authenticationGuard] },
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  {path: '**',  redirectTo: 'sign-in' , pathMatch: 'full'},
];
