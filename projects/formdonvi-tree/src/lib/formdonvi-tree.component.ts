import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormnnghecnktComponent } from 'formnnghecnkt';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'lib-formdonvi-tree',
  templateUrl: './formdonvi-tree.component.html',
  styleUrls: [
    './formdonvi-tree.component.css',
  ]
})
export class FormdonviTreeComponent implements OnInit {
  selected: any;
  donvis!: TreeNode[]
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public matDialogRef: MatDialogRef<FormdonviTreeComponent>,
    private _matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.donvis = this.data.donvis.filter((item: { orgParentId: null; }) => item.orgParentId == null).map((e: { organizationId: any; orgName: any; }) => ({
      key: e.organizationId,
      label: e.orgName,
      data: e,
      styleClass: "font-bold",
      expanded: true
    }));
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
    if (this.selected == undefined || this.selected == null) {
      return;
    }
    this.matDialogRef.close(this.selected);
  }

  unSelectAndClose(): void {
    this.matDialogRef.close({
      data: {
        orgName: null,
        organizationId: null
      }
    });
  }

  onClose(): void {
    // Close the dialog
    this.matDialogRef.close();
  }
}
