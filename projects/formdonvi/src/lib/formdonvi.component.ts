import { HttpClient } from '@angular/common/http';
import { Component, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';

@Component({
  selector: 'lib-formdonvi',
  templateUrl: './formdonvi.component.html',
  styleUrls: [
    './formdonvi.component.css'
  ]
})
export class FormdonviComponent implements OnInit {
  @ViewChild('dtdonvi') dtdonvi: any;
  selected: any;
  listSelected: any[] = [];
  scrollHeight = '960px';
  selectionMode = 'single'
  idField = 'organizationId';

  private _unsubscribeAll: Subject<any> = new Subject<any>();
  constructor(
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public matDialogRef: MatDialogRef<FormdonviComponent>
  ) {
  }

  ngOnInit(): void {
    if (this.data.selectionMode) this.selectionMode = this.data.selectionMode
    if (this.data.idField)  this.idField = this.data.idField;
    if (this.data.listSelected) this.listSelected = this.data.listSelected;
  }

  onRowSelect(event: any, selected: any) {
    this.selected = selected;
    this.matDialogRef.close(selected);
  }
  /**
  * Save and close
  */
  saveAndClose(): void {
    if (this.selectionMode != 'single' && this.listSelected) {
      this.matDialogRef.close(this.listSelected);
    } else {
      if (this.selected == undefined || this.selected == null) {
        return;
      }
      this.matDialogRef.close(this.selected);
    }
  }

  onClose(): void {
    // Close the dialog
    this.matDialogRef.close();
  }
  /**
  * On destroy
  */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

}
