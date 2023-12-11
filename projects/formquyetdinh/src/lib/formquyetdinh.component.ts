import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'lib-formquyetdinh',
  templateUrl: './formquyetdinh.component.html',
  styleUrls: [
    './formquyetdinh.component.css'
  ]
})
export class FormquyetdinhComponent implements OnInit {

  selected: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public matDialogRef: MatDialogRef<FormquyetdinhComponent>
  ) { }

  ngOnInit(): void {
  }

  onRowSelect(event: any, selected: any) {
    this.selected = selected;
    this.matDialogRef.close(this.selected);
  }

  unSelectAndClose(): void {
    this.matDialogRef.close({
      data: {
        noiDung: null,
        qdinhId: null
      }
    });
  }
  /**
  * Save and close
  */
  saveAndClose(): void {
    if (this.selected == undefined || this.selected == null) {
      return;
    }
    this.matDialogRef.close(this.selected);
  }

  onClose(): void {
    // Close the dialog
    this.matDialogRef.close();
  }
}
