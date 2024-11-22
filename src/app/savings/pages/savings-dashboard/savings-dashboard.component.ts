import { Component } from '@angular/core';
import {SavingItemComponent} from "../../components/saving-item/saving-item.component";
import {SavingListComponent} from "../../components/saving-list/saving-list.component";
import {SavingApiService} from "../../services/saving-api.service";
import {Saving} from "../../model/saving.entity";
import {AuthenticationService} from "../../../iam/services/authentication.service";

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
  userId : number = 0;
  savings: Saving[];

  constructor(private savingApiService: SavingApiService, private authenticationService: AuthenticationService) {
    this.savings = [];
  }

  ngOnInit() {
    this.authenticationService.currentUserId.subscribe((userId: number) => {
      this.userId = userId;
    });
    this.savingApiService.getSavingsByUserId(this.userId).subscribe((savings: Saving[]) => {
      this.savings = savings;
    });
  }

  onSavingCreated(newSaving: Saving) {
    this.savingApiService.createSaving(newSaving).subscribe((saving: Saving) => {
      this.savings.push(saving);
    });
  }

}
