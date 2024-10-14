import {Component, Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {NgForOf} from "@angular/common";
import {Wallet} from "../../model/wallet.entity";
import {MatInputModule} from "@angular/material/input";
import { MatNativeDateModule } from '@angular/material/core';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker,
  MatEndDate,
  MatStartDate
} from "@angular/material/datepicker";

@Component({
  selector: 'app-wallet-filters',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, ReactiveFormsModule, MatSelectModule, NgForOf, MatButtonModule, MatInputModule, MatDateRangeInput, MatDateRangePicker, MatDatepickerToggle, MatEndDate, MatStartDate, MatNativeDateModule, MatDatepickerInput, MatDatepicker],
  templateUrl: './dashboard-filters.component.html',
  styleUrl: './dashboard-filters.component.css'
})
export class DashboardFiltersComponent {
  @Input() wallets!: Wallet[];
  dashboardForms!: FormGroup;

  constructor(private fb: FormBuilder) {}


  ngOnInit(): void {
    this.dashboardForms = this.fb.group({
      wallet: null,
      start: [new Date(new Date().getFullYear(), new Date().getMonth(), 1)],
      end: [new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)]
    });
  }

  resetFilters(): void {
    this.dashboardForms.reset({
      wallet: null,
      start: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      end: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
    });
  }

}
