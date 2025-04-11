import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'lib-formdonvi-tree',
  templateUrl: './formdonvi-tree.component.html',
  styleUrls: [
    './formdonvi-tree.component.css',
  ]
})
export class FormdonviTreeComponent implements OnInit {
  @ViewChild('tree') tree: any;

  selected: any;
  listSelected: TreeNode[] = [];

  donvis!: TreeNode[]
  selectionMode = 'single';
  enableSelectDown = false; // Cho phép chọn cả các nút con của nút hiện tại

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public matDialogRef: MatDialogRef<FormdonviTreeComponent>,
    private _matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    if (this.data.selectionMode) this.selectionMode = this.data.selectionMode;
    if (this.data.enableSelectDown) this.enableSelectDown = this.data.enableSelectDown;

    // Khởi tạo danh sách đã chọn ban đầu (đệ quy tìm cây)
    if (this.data.listSelected) {
      let selectes = this.data.listSelected.map((e: { organizationId: any; orgName: any; }) => ({
        key: e.organizationId,
        label: e.orgName,
        data: e,
        styleClass: "font-bold",
        expanded: true
      }));
      this.listSelected = selectes;
    }

    // Khởi tạo danh sách cây danh mục
    this.donvis = this.data.donvis.filter((item: { orgParentId: null; }) => item.orgParentId == null).map((e: { organizationId: any; orgName: any; }) => ({
      key: e.organizationId,
      label: e.orgName,
      data: e,
      styleClass: "font-bold",
      expanded: true
    }));
    if (!this.donvis || this.donvis.length == 0) {
      let rootNode = this.data.donvis[0];
      this.data.donvis.forEach((element:any) => {
        if (element.orgLevel < rootNode.orgLevel) {
          rootNode = element;
        }
      });
      this.donvis = [{
        key: rootNode.organizationId,
        label: rootNode.orgName,
        data: rootNode,
        styleClass: "font-bold",
        expanded: true
      }];
    }
    this.donvis.forEach(element => {
      this.findChildren(this.data.donvis, element);
    });
  }

  findChildren(donvis: any[], element: TreeNode<any>) {
    element.children = donvis.filter((item: { orgParentId: any; }) => (item.orgParentId && item.orgParentId === element.data.orgCode)).map((e: { organizationId: any; orgName: any; }) => ({
      key: e.organizationId,
      label: e.orgName,
      data: e,
      styleClass: "font-normal",
    }))
    if (element.children && element.children.length > 0) {
      element.styleClass = "font-semibold"
    }
    element.children.forEach((child: any) => {
      this.findChildren(donvis, child);
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
          orgName: null,
          organizationId: null
        }
      });
    }
  }

  onClose(): void {
    // Close the dialog
    this.matDialogRef.close();
  }
}
