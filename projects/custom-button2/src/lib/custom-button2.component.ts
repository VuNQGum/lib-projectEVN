import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'lib-custom-button2',
  templateUrl: './custom-button2.component.html',
  styleUrls: ['./custom-button2.component.css']
})
export class CustomButton2Component implements OnInit {
  @Input() color: string = "#000";
  @Input() urlApi: string = "";
  @Input() body: string = "Hello world"
  listData = [];
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  constructor(private http: HttpClient) {
    console.log('urlApi:', this.urlApi);

    console.log('body:', this.body);
  }

  ngOnInit(): void {
    const urlBind = `${this.urlApi}/employe/v1/danhMuc/getAllLTpgdinh`;
    console.log('urlApi:', urlBind);

    this.http.get(`${this.urlApi}/v2/admin/getMenuByUserAndPm/TIVP`).pipe(takeUntil(this._unsubscribeAll))
      .subscribe((res: any) => {
        if (!res || !res.state) return;
        this.listData = res.data;
      });
  }

}
