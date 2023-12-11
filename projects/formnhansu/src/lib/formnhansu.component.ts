import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';

@Component({
  selector: 'lib-formnhansu',
  templateUrl: './formnhansu.component.html',
  styleUrls: [
    './formnhansu.component.css'
  ]
})
export class FormnhansuComponent implements OnInit {
  @ViewChild('dtns') dtns: any;
  listSelected: any[] = [];
  selected: any;
  selectionMode = 'single'
  idField = 'nsID';
  
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  constructor(
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public matDialogRef: MatDialogRef<FormnhansuComponent>
  ) { }

  ngOnInit(): void {
    if (this.data.selectionMode) this.selectionMode = this.data.selectionMode;
    if (this.data.listSelected) this.listSelected = this.data.listSelected;
    if (this.data.idField)  this.idField = this.data.idField;
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

  unSelectAndClose(): void {
    if (this.selectionMode != 'single' && this.listSelected) {
      this.matDialogRef.close(this.listSelected);
    } else {
      this.matDialogRef.close({
        data: {
          tenkhaisinh: null,
          nsID: null
        }
      });
    }
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
