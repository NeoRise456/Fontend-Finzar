import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef,} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SavingApiService } from '../../services/saving-api.service';
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule, MatCardActions, MatCardContent, MatCardHeader} from "@angular/material/card";

@Component({
    selector: 'app-saving-delete',
    templateUrl: './saving-delete.component.html',
    styleUrls: ['./saving-delete.component.css'],
    imports: [
        MatIcon,
        MatButton,
        MatDialogModule,
        MatCardHeader,
        MatCardContent,
        MatCardActions,
        MatCardModule
    ],
    standalone: true
})
export class SavingDeleteComponent {
    savingId: number | undefined;

    constructor(
        private dialog: MatDialog,
        @Inject(MAT_DIALOG_DATA) public data: { savingId: number },
        private savingApiService: SavingApiService,
        private router: Router,
    private dialogRef: MatDialogRef<SavingDeleteComponent>
    ) {}


    deleteSaving(): void {
        if (this.data.savingId) {
            this.savingApiService.deleteSavingById(this.data.savingId).subscribe(
                () => {
                    console.log('Saving deleted successfully');
                    this.dialogRef.close(true);
                    this.router.navigate(['/savings']);
                },
                (error) => {
                    console.error('Error deleting saving:', error);
                }
            );
        }
    }
    cancel(): void {
        this.dialogRef.close();
    }
}