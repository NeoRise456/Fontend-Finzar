import { Component } from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-period-filter',
  standalone: true,
  imports: [MatFormFieldModule, MatDatepickerModule,MatNativeDateModule,ReactiveFormsModule],
  templateUrl: './period-filter.component.html',
  styleUrl: './period-filter.component.css'
})
export class PeriodFilterComponent {
  dateRangeForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.dateRangeForm = this.fb.group({
      start: [new Date(new Date().getFullYear(), new Date().getMonth(), 1)], // Default start date
      end: [new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)]    // Default end date
    });
  }
}
