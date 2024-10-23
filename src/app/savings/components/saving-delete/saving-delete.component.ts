import {MatDialog, MatDialogActions, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import { SavingApiService } from '../../services/saving-api.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";


@Component({
    selector: 'app-saving-delete',
    templateUrl: './saving-delete.component.html',
    styleUrls: ['./saving-delete.component.css'],
    imports: [
        MatIcon,
        MatButton
    ],
    standalone: true
})
export class SavingDeleteComponent {
    constructor(
        private dialog: MatDialog,
        private savingApiService: SavingApiService,
        private router: Router
    ) {}
    openDeleteDialog(savingId: number): void {
        const dialogRef = this.dialog.open(DeleteConfirmationDialog);

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.deleteSaving(savingId);
            }
        });
    }
    deleteSaving(savingId: number): void {
        this.savingApiService.deleteSavingById(savingId).subscribe(
            () => {
                console.log('Saving deleted successfully');
                this.router.navigate(['/savings']);
            },
            (error) => {
                console.error('Error deleting saving:', error);
            }
        );
    }
}

@Component({
    template: `
        <h2 mat-dialog-title>Confirm Delete</h2>
        <mat-dialog-content>
            <p>Are you sure you want to delete this saving?</p>
        </mat-dialog-content>
        <mat-dialog-actions>
            <button mat-button (click)="onCancel()">Cancel</button>
            <button mat-button color="warn" (click)="onConfirm()">Confirm</button>
        </mat-dialog-actions>
    `,
    imports: [
        MatDialogActions,
        MatDialogContent,
        MatDialogTitle,
        MatButton
    ],
    standalone: true
})
export class DeleteConfirmationDialog {
    constructor(public dialogRef: MatDialogRef<DeleteConfirmationDialog>) {}

    onConfirm(): void {
        this.dialogRef.close(true);
    }
    onCancel(): void {
        this.dialogRef.close(false);
    }
}