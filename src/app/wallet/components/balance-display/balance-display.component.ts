import {Component, Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-balance-display',
  standalone: true,
  imports: [MatCardModule, NgClass],
  templateUrl: './balance-display.component.html',
  styleUrl: './balance-display.component.css'
})
export class BalanceDisplayComponent {
  @Input() balance!: number;
  @Input() title!: string;
}
