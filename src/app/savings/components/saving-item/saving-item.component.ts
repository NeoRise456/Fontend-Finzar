import {Component, Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {Saving} from "../../model/saving.entity";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-saving-item',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatProgressBarModule, RouterLink],
  templateUrl: './saving-item.component.html',
  styleUrl: './saving-item.component.css'
})
export class SavingItemComponent {
  @Input() saving!: Saving;
  tosave!: number;
  percentage!: number;

  ngOnInit() {
    this.percentage = (this.saving.currentAmount / this.saving.totalGoal) * 100;
    this.tosave = this.saving.totalGoal - this.saving.currentAmount;
  }


}
