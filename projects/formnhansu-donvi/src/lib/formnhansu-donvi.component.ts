import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { FormdonviTreeComponent } from 'formdonvi-tree';
import { Store } from '@ngrx/store';
import { AppState } from './ngxstore/app.state';
import { APP_ACTION } from './ngxstore/app.actions';
import { User } from './ngxstore/user.types';

@Component({
  selector: 'lib-formnhansu-donvi',
  templateUrl: './formnhansu-donvi.component.html',
  styleUrls: [
    './formnhansu-donvi.component.css'
  ]
})
export class FormnhansuDonviComponent implements OnInit {
  @ViewChild('dtns') dtns: any;
  @ViewChild('caption') caption: any

  donvis: any[] = [];
  selectedDonvi: any;
  nhansus: any[] = [];
  selected: any; //result in single select mode
  selectionMode = 'single';
  listSelected: any[] = []; //result in multiple select mode
  idField = 'nsID'
  ignoreAuthor = false;
  rightTructhuoc = false;

  // Thông tin user lưu trong AppState chỉ sử dụng với HRMS
  user_info: any;
  user$ = new BehaviorSubject<User>({});

  private _unsubscribeAll: Subject<any> = new Subject<any>();
  constructor(
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public matDialogRef: MatDialogRef<FormnhansuDonviComponent>,
    private _matDialog: MatDialog,
    private store: Store<AppState>,
  ) {
    const appUser = this.store.select((state) => state.appUser);
    appUser.subscribe((res: any) => {
      const data = res;
      if (data && data.type === APP_ACTION.USER_INFO) {
        this.user_info = { ...data.payload };
        this.user_info.status = 'online';
        this.user$.next(this.user_info);
      }
    });
  }

  ngOnInit(): void {
    if (this.data.selectionMode) this.selectionMode = this.data.selectionMode;
    if (this.data.listSelected) this.listSelected = this.data.listSelected;
    if (this.data.idField) this.idField = this.data.idField;
    if (this.data.ignoreAuthor) this.ignoreAuthor = this.data.ignoreAuthor;
    if (this.data.rightTructhuoc) this.rightTructhuoc = this.data.rightTructhuoc;

    if (this.data.userDonvi) {
      this.selectedDonvi = {
        organizationId: this.data.userDonvi.organizationId,
        orgName: this.data.userDonvi.orgName,
        orgCode: this.data.userDonvi.orgCode
      }
      this.http.get(this.data.apiNhansu + '/' + this.selectedDonvi.organizationId).pipe(takeUntil(this._unsubscribeAll))
      .subscribe((res: any) => {
        if (!res || !res.state) return;
        this.nhansus = res.data;
      });
    }
    else {
      this.selectedDonvi = {}
    }

    this.http.get(this.data.apiDonvi).pipe(takeUntil(this._unsubscribeAll))
    .subscribe((res: any) => {
      if (!res || !res.state) return;
      this.donvis = res.data;
    });

    // Phân quyền lựa chọn trực thuộc
    if (!this.ignoreAuthor) {
      if (!this.data?.rightTructhuoc) {
        this.http.get(`https://smartevn-test.evn.com.vn/hrms/employe/v1/home/listRights`).pipe(takeUntil(this._unsubscribeAll)).subscribe((res: any) => {
          if (!res || !res.state) return;
          let rights = res.data;
          if (rights.some((right: { role: any; }) => right.role == 'RIGHT_TRUCTHUOC')) {
            this.rightTructhuoc = true;
          }
        })
      }
    }
  }

  onChonDonvi() {
    const dialogRef = this._matDialog.open(FormdonviTreeComponent, {
      disableClose: false,
      data: {
        donvis: this.donvis
      }
    });

    dialogRef.afterClosed()
      .subscribe((result) => {
        if (!result) return
        this.selectedDonvi = result.data;
        this.http.get(this.data.apiNhansu + '/' + this.selectedDonvi.organizationId).pipe(takeUntil(this._unsubscribeAll))
        .subscribe((res: any) => {
          if (!res || !res.state) return;
          this.nhansus = res.data;
        });
      });
  }

  onRowSelect(event: any, selected: any) {
    this.selected = selected;
    this.selected.tendonvi = this.selectedDonvi.orgName;
    this.matDialogRef.close(selected);
  }

  saveAndClose(): void {
    if (this.selectionMode != 'single' && this.listSelected) {
      this.listSelected.forEach(ns => {
        ns.tendonvi = this.selectedDonvi.orgName
      })
      this.matDialogRef.close(this.listSelected);
    } else {
      if (this.selected == undefined || this.selected == null) {
        return;
      }
      this.selected.tendonvi = this.selectedDonvi.orgName;
      this.matDialogRef.close(this.selected);
    }
  }

  onClose(): void {
    // Close the dialog
    this.matDialogRef.close();
  }

  getName(hoten: string) {
    let temp = hoten.split(' ');
    let ten = temp[temp.length - 1];
    return ten;
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
