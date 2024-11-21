import { Routes } from '@angular/router';
import {DashboardComponent} from "./wallet/pages/dashboard/dashboard.component";
import {WalletViewComponent} from "./wallet/pages/wallet-view/wallet-view.component";
import {SavingsDashboardComponent} from "./savings/pages/savings-dashboard/savings-dashboard.component";
import {BudgetsDashboardComponent} from "./budgets/pages/budgets-dashboard/budgets-dashboard.component";
import {SavingsDetailComponent} from "./savings/pages/savings-detail/savings-detail.component";
import {SignInComponent} from "./iam/pages/sign-in/sign-in.component";
import {SignUpComponent} from "./iam/pages/sign-up/sign-up.component";

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'wallet/:id', component: WalletViewComponent },
  {path: 'savings', component: SavingsDashboardComponent},
  {path: 'saving/:id', component: SavingsDetailComponent },
  {path: 'budgets', component: BudgetsDashboardComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  {path: '**',  redirectTo: 'sign-in' , pathMatch: 'full'},
];
