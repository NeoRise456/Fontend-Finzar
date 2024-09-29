import { Component } from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";


@Component({
  selector: 'app-period-filter',
  standalone: true,
  imports: [MatFormFieldModule, MatDatepickerModule],
  templateUrl: './period-filter.component.html',
  styleUrl: './period-filter.component.css'
})
export class PeriodFilterComponent {

}
