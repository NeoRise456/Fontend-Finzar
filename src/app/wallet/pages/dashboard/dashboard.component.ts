import { Component } from '@angular/core';
import {BaseService} from "../../../shared/services/base.service.service";
import {Wallet} from "../../models/wallet.entity";
import {WalletListComponent} from "../../components/wallet-list/wallet-list.component";
import {DashboardAnalyticsComponent} from "../../components/dashboard-analytics/dashboard-analytics.component";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [WalletListComponent, DashboardAnalyticsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  userWallets!: Wallet[];

  constructor(private baseService: BaseService<any>) {
    this.userWallets = [];
  }

  ngOnInit(): void {
    this.baseService.getUserWallets(1).subscribe(
      wallets => {
        this.userWallets = wallets;
      }
    );

  }

}
