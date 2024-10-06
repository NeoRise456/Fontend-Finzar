import { Routes } from '@angular/router';
import {DashboardComponent} from "./wallet/pages/dashboard/dashboard.component";
import {WalletViewComponent} from "./wallet/pages/wallet-view/wallet-view.component";
import {SavingsDashboardComponent} from "./savings/pages/savings-dashboard/savings-dashboard.component";

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'wallet/:id', component: WalletViewComponent },
  {path: 'savings', component: SavingsDashboardComponent},
  {path: 'budgets', component: SavingsDashboardComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**',  redirectTo: 'dashboard' , pathMatch: 'full'},
];
