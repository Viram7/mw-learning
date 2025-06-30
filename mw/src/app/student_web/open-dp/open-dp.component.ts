import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-open-dp',
  imports: [],
  templateUrl: './open-dp.component.html',
  styleUrl: './open-dp.component.scss'
})
export class OpenDpComponent {


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<OpenDpComponent>
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

}
