import {Component, Input} from '@angular/core';
import {Saving} from "../../model/saving.entity";
import {SavingItemComponent} from "../saving-item/saving-item.component";
import {NgForOf} from "@angular/common";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatDialog} from "@angular/material/dialog";
import {CreateSavingDialogComponent} from "../create-and-edit-saving/create-saving-dialog.component";
import {Output, EventEmitter} from "@angular/core";

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
  @Output() savingCreated = new EventEmitter<Saving>();

  constructor(public dialog: MatDialog) {}


  onCreateSaving() {
    const dialogRef = this.dialog.open(CreateSavingDialogComponent, {
      hasBackdrop: true
    });

    dialogRef.afterClosed().subscribe((saving: Saving) => {
      if (saving) {
        this.savingCreated.emit(saving);
      }
    });

  }


}
