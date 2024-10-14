import {Component, Output} from '@angular/core';

import {Saving} from "../../model/saving.entity";
import {Category} from "../../../shared/model/categories.entity";
import {CategoryApiService} from "../../../shared/services/category-api.service";
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import { FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {MatRadioModule} from "@angular/material/radio";
import {EventEmitter} from "@angular/core";



@Component({
  selector: 'app-create-and-edit-saving',
  standalone: true,
  imports: [
    MatDialogModule, MatSelectModule, MatButtonModule, MatInputModule, FormsModule, NgForOf, MatRadioModule
  ],
  templateUrl: './create-saving-dialog.component.html',
  styleUrl: './create-saving-dialog.component.css'
})
export class CreateSavingDialogComponent {
  @Output() savingCreated = new EventEmitter<Saving>();
  newSaving: Saving;
  categories: Category[];



  constructor(private dialogRef: MatDialogRef<CreateSavingDialogComponent>,
              private categoryApiService: CategoryApiService,
              ) {
    this.newSaving = new Saving();
    this.categories = [];
  }

  ngOnInit() {

    this.categoryApiService.getAllCategories().subscribe(
      (categories : Category[]) => {
        this.categories = categories;
      }
    );

  }

  onSubmit() {
    this.newSaving.userId = 1; // Hardcoded user id
    this.dialogRef.close(this.newSaving);
  }

  onClose() {
    this.dialogRef.close(null);
  }
}
