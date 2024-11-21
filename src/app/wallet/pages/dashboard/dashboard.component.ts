import {Component, OnInit} from '@angular/core';
import {BaseService} from "../../../shared/services/base.service.service";
import {Wallet} from "../../model/wallet.entity";
import {WalletListComponent} from "../../components/wallet-list/wallet-list.component";
import {DashboardAnalyticsComponent} from "../../components/dashboard-analytics/dashboard-analytics.component";
import {AuthenticationService} from "../../../iam/services/authentication.service";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [WalletListComponent, DashboardAnalyticsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  userWallets!: Wallet[];
  currentUserId: number = 0;

  constructor(private baseService: BaseService<any>, private authenticationService: AuthenticationService) {
    this.userWallets = [];
  }

  ngOnInit(): void {
    this.authenticationService.currentUserId.subscribe(userId => {
      this.currentUserId = userId;
    })
    this.baseService.getUserWallets(this.currentUserId).subscribe(
      wallets => {
        this.userWallets = wallets;
      }
    );

  }

}
