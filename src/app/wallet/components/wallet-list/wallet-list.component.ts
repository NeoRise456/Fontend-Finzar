import {Component, Input} from '@angular/core';
import {Wallet} from "../../models/wallet.entity";
import {WalletItemComponent} from "../wallet-item/wallet-item.component";
import {NgForOf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-wallet-list',
  standalone: true,
  imports: [
    WalletItemComponent,
    NgForOf,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './wallet-list.component.html',
  styleUrl: './wallet-list.component.css'
})
export class WalletListComponent {
  @Input() wallets!: Wallet[];
}
