import { Component, Inject, Output } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions} from '@angular/material/dialog';
import { Saving } from '../../model/saving.entity';
import { Category } from '../../../shared/model/categories.entity';
import { CategoryApiService } from '../../../shared/services/category-api.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatButton} from "@angular/material/button";
import {MatLabel} from "@angular/material/form-field";

@Component({
  selector: 'app-edit-saving',
  standalone: true,
  imports: [ReactiveFormsModule, MatLabel,MatCardModule, MatDialogTitle, MatDialogContent, MatFormField, MatInput, MatSelect, MatOption, MatDatepickerToggle, MatDatepickerInput, MatDatepicker, MatDialogActions, MatButton],
  templateUrl: 'saving-edit.component.html',
  styleUrls: ['saving-edit.component.css']
})
export class SavingEditComponent {
  @Output() savingUpdated = new EventEmitter<Saving>();
  categories: Category[] = [];
  editForm!: FormGroup;

  constructor(
      private dialogRef: MatDialogRef<SavingEditComponent>,
      @Inject(MAT_DIALOG_DATA) private data: Saving,
      private categoryApiService: CategoryApiService,
      private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
      name: [data.name, []],
      totalGoal: [data.totalGoal, []],
      categoryId: [data.categoryId, []],
      startDate: [data.startDate, []],
      endDate: [data.endDate, []]
    });
    this.categoryApiService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  ngOnInit() {
    this.categoryApiService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });

    if (this.data) {
      this.editForm.patchValue({
        name: this.data.name,
        totalGoal: this.data.totalGoal,
        startDate: this.data.startDate,
        endDate: this.data.endDate,
      });
    }
  }

  onSubmit() {
    if (this.editForm.valid) {
      const updatedSaving: Saving = { ...this.data, totalGoal: this.editForm.value.amount, ...this.editForm.value };
      this.dialogRef.close(updatedSaving);
    }
  }
  onClose() {
    this.dialogRef.close(null);
  }
}