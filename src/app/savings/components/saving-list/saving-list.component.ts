import {Component, Input} from '@angular/core';
import {Saving} from "../../model/saving.entity";
import {SavingItemComponent} from "../saving-item/saving-item.component";
import {NgForOf} from "@angular/common";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-saving-list',
  standalone: true,
  imports: [
    SavingItemComponent,
    NgForOf,
    MatCard,
    MatIcon,
    MatCardContent
  ],
  templateUrl: './saving-list.component.html',
  styleUrl: './saving-list.component.css'
})
export class SavingListComponent {
  @Input() savings!: Saving[];




}
