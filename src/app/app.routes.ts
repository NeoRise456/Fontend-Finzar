import { Routes } from '@angular/router';
import {DashboardComponent} from "./wallet/pages/dashboard/dashboard.component";
import {WalletViewComponent} from "./wallet/pages/wallet-view/wallet-view.component";
import {SavingsDashboardComponent} from "./savings/pages/savings-dashboard/savings-dashboard.component";
import {BudgetsDashboardComponent} from "./budgets/pages/budgets-dashboard/budgets-dashboard.component";
import {SavingsDetailComponent} from "./savings/pages/savings-detail/savings-detail.component";

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'wallet/:id', component: WalletViewComponent },
  {path: 'savings', component: SavingsDashboardComponent},
  {path: 'saving/:id', component: SavingsDetailComponent },
  {path: 'budgets', component: BudgetsDashboardComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path: '**',  redirectTo: 'dashboard' , pathMatch: 'full'},
];
