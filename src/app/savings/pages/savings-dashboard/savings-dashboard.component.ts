import { Component } from '@angular/core';
import {SavingItemComponent} from "../../components/saving-item/saving-item.component";
import {SavingListComponent} from "../../components/saving-list/saving-list.component";
import {SavingApiService} from "../../services/saving-api.service";
import {Saving} from "../../model/saving.entity";

@Component({
  selector: 'app-savings-dashboard',
  standalone: true,
  imports: [
    SavingItemComponent,
    SavingListComponent
  ],
  templateUrl: './savings-dashboard.component.html',
  styleUrl: './savings-dashboard.component.css'
})
export class SavingsDashboardComponent {
  savings: Saving[];

  constructor(private savingApiService: SavingApiService) {
    this.savings = [];
  }

  ngOnInit() {
    this.savingApiService.getSavingsByUserId(1).subscribe((savings: Saving[]) => {
      this.savings = savings;
    });
  }

  onSavingCreated(newSaving: Saving) {
    this.savingApiService.createSaving(newSaving).subscribe((saving: Saving) => {
      this.savings.push(saving);
    });
  }

}
