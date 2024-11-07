import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'lib-formphongban',
  templateUrl: './formphongban.component.html',
  styleUrls: [
    './formphongban.component.css'
  ]
})
export class FormphongbanComponent implements OnInit {
  @ViewChild('tree') tree: any;
  selected: any;
  listSelected: TreeNode[] = [];
  phongBan!: TreeNode[]
  phongBanMoi!: TreeNode[]
  selectionMode = 'single';
  // Tên trường xác định phòng ban cũ, mới
  activeField: string = 'ttrangHdong';

  hienthiPBcu: boolean = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public matDialogRef: MatDialogRef<FormphongbanComponent>,
    private _matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    if (this.data.selectionMode) this.selectionMode = this.data.selectionMode;

    if (this.data.activeField) this.activeField = this.data.activeField;
    // Khởi tạo danh sách đã chọn ban đầu (đệ quy tìm cây)
    if (this.data.listSelected) {
      let selectes = this.data.listSelected.map((e: { id: any; name: any; }) => ({
        key: e.id,
        label: e.name,
        data: e,
        styleClass: "font-bold",
        expanded: true
      }));
      this.listSelected = selectes;
    }

    // Khởi tạo danh sách cây danh mục
    this.phongBan = this.data.phongBan.filter((item: { parentId: null; }) => item.parentId == null)
      .map((e: any) => {
        let result = {
          key: e.id,
          label: e.name,
          data: e,
          styleClass: "font-bold",
          expanded: true
        }
        if ((e.active && e.active != 1) || (e[this.activeField]) && (e[this.activeField] != 1)) result.styleClass += ' text-red-500'
        return result
      });
    this.phongBan.forEach(element => {
      this.findChildren(this.data.phongBan, element);
    });

    this.phongBanMoi = this.data.phongBan.filter((item: any) => (item.parentId == null && (item?.active == 1 || item[this.activeField] == 1))).map((e: { id: any; name: any; }) => ({
      key: e.id,
      label: e.name,
      data: e,
      styleClass: "font-bold",
      expanded: true
    }));
    this.phongBanMoi.forEach(element => {
      this.findChildrenMoi(this.data.phongBan, element);
    });
  }

  findChildren(donvis: any[], element: TreeNode<any>) {
    element.children = donvis.filter((item: { parentId: any; }) => (item.parentId && item.parentId == element.data.id)).map((e: any) => {
      let result = {
        key: e.id,
        label: e.name,
        data: e,
        styleClass: "font-normal",
      }
      if ((e.active && e.active != 1) || (e[this.activeField]) && (e[this.activeField] != 1)) result.styleClass += ' text-red-500'
      return result
    })
    if (element.children && element.children.length > 0 && !element.styleClass?.includes('font-bold')) {
      element.styleClass += " font-semibold"
    }
    element.children.forEach((child: any) => {
      this.findChildren(donvis, child);
    });
  }

  findChildrenMoi(donvis: any[], element: TreeNode<any>) {
    element.children = donvis.filter((item: any) => (item.parentId && item.parentId == element.data.id && (item?.active == 1 || item[this.activeField] == 1))).map((e: { id: any; name: any; }) => ({
      key: e.id,
      label: e.name,
      data: e,
      styleClass: "font-normal",
    }))
    if (element.children && element.children.length > 0) {
      element.styleClass = "font-semibold"
    }
    element.children.forEach((child: any) => {
      this.findChildrenMoi(donvis, child);
    });
  }

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

  unSelectAndClose(): void {
    if (this.selectionMode != 'single' && this.listSelected) {
      this.matDialogRef.close(this.listSelected);
    } else {
      this.matDialogRef.close({
        data: {
          name: null,
          id: null
        }
      });
    }
  }

  onClose(): void {
    // Close the dialog
    this.matDialogRef.close();
  }

}
