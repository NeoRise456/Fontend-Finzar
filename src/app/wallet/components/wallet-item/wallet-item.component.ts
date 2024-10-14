import {Component, Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {Wallet} from "../../model/wallet.entity";

@Component({
  selector: 'app-wallet-item',
  standalone: true,
  imports: [MatCardModule, RouterLink,MatIconModule],
  templateUrl: './wallet-item.component.html',
  styleUrl: './wallet-item.component.css'
})
export class WalletItemComponent {
  @Input() wallet!: Wallet;
}
