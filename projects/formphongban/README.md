# Formphongban

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.0.

## Code scaffolding

Run `ng generate component component-name --project formphongban` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project formphongban`.
> Note: Don't forget to add `--project formphongban` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build formphongban` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build formphongban`, go to the dist folder `cd dist/formphongban` and run `npm publish`.

## Running unit tests

Run `ng test formphongban` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Using
Using with dialog:
```
    openPhongban() {
        const dialogRef = this._matDialog.open(FormphongbanComponent, {
            disableClose: false,
            data: this.dataPhongBan
        });

        dialogRef.afterClosed()
            .subscribe((result) => {
                console.log(result);

            });
    }
```
Data:
```
    dataNhansuDonvi = {
        {
            boChon: false,
            phongBan: this.dataPhongBan, // Data tương tự trường listSelected
            selectionMode: 'checkbox',
            listSelected: [{
                "id": 115000000000130,
                "orgId": 115,
                "name": "Ban giám đốc",
                "shortName": "BGD",
                "typeID": 1,
                "parentId": null, // Trường xác định cây con
                "level": 1,
                "show": true,
                "dept_Root_Id": 115000000000130,
                "active": 1,
                "ngayTL": "1989-12-31T17:00:00.000+00:00",
                "ngayKT": null,
                "lydo": "",
                "qdinhId": null,
                "stt": 1,
                "dept_ID_Old": null,
                "deleted": false,
                "createUser": "hatt@convert",
                "updateUser": "nhungtth",
                "createTime": null,
                "updateTime": "2015-06-05T07:40:51.787+00:00",
                "checkAct": true,
                "chucnang": null,
                "nhiemvu": null,
                "deptCC": true
            },],
            activeField: 'isactive' // Giá trị mặc định là ttrangHdong
        }
    }
```
