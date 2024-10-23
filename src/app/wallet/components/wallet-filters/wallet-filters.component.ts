import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { MatNativeDateModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { Category } from "../../../shared/model/categories.entity";
import { CategoryApiService } from "../../../shared/services/category-api.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-wallet-filters',
  standalone: true,
  imports: [MatDatepickerModule, MatInputModule, MatNativeDateModule, MatFormFieldModule, MatCardModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, NgForOf],
  templateUrl: './wallet-filters.component.html',
  styleUrl: './wallet-filters.component.css'
})
export class WalletFiltersComponent implements OnInit{
  categories: Category[] | undefined;
  walletForms!: FormGroup;

  constructor(private fb: FormBuilder, private categoryApiService: CategoryApiService) {
    this.categories = [];
  }

  ngOnInit(): void {
    this.walletForms = this.fb.group ({
      category: null,
      start: [new Date(new Date().getFullYear(), new Date().getMonth(), 1)],
      end: [new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)]
    });
    this.categoryApiService.getAllCategories().subscribe(categories => {
        this.categories = categories;
    })
  }

  resetFilters(): void {
    this.walletForms.reset({
      start: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      end: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
    });
  }
}
