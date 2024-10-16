import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
    selector: 'app-saving-delete',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatDialogModule],
    templateUrl: './saving-delete.component.html',
    styleUrl: './saving-delete.component.css'
})
export class SavingDeleteComponent {
    constructor(
        public dialogRef: MatDialogRef<SavingDeleteComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { savingId: number }
    ) {}

    onConfirm(): void {
        this.dialogRef.close(true);
    }

    onCancel(): void {
        this.dialogRef.close(false);
    }
}