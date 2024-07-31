import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'lib-formnnghecnkt',
  templateUrl: './formnnghecnkt.component.html',
  styleUrls: [
    './formnnghecnkt.component.css'
  ]
})
export class FormnnghecnktComponent implements OnInit {
  selected: any;
  nnghe!: TreeNode[]
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public matDialogRef: MatDialogRef<FormnnghecnktComponent>,
    private _matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.nnghe = this.data.lnhomnghe.filter((item: { idNhomngheCha: null; }) => item.idNhomngheCha == null).map((e: { id: any; name: any; }) => ({
      label: e.name,
      data: e,
      styleClass: "font-bold",
      selectable: false,
      expanded: true
    }));
    this.nnghe.forEach(element => {
      this.findChildren(this.data.lnhomnghe, this.data.lnghe, element);
    });
  }

  findChildren(nhomNnghe: any[], dsachNghe: any[], element: TreeNode<any>) {
    element.children = nhomNnghe.filter((item: { idNhomngheCha: any; }) => (item.idNhomngheCha && item.idNhomngheCha == element.data.id)).map((e: { id: any; name: any; }) => ({
      label: e.name,
      data: e,
      styleClass: "font-bold",
      selectable: false
    }))

    let ngheChildren: any[] = dsachNghe.filter((item: { idNhomNgheCnkt: any; }) => (item.idNhomNgheCnkt && item.idNhomNgheCnkt == element.data.id)).map((e: { id: any; name: any; }) => ({
      key: e.id,
      label: e.name,
      data: e,
      styleClass: "font-normal"
    }))

    element.children.forEach((child: any) => {
      this.findChildren(nhomNnghe, dsachNghe, child);
    });

    element.children.push(...ngheChildren)
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
        id: null,
        name: null
      }
    });
  }

  onClose(): void {
    // Close the dialog
    this.matDialogRef.close();
  }
}
