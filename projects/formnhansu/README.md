# Formnhansu

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.0.

## Code scaffolding

Run `ng generate component component-name --project formnhansu` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project formnhansu`.
> Note: Don't forget to add `--project formnhansu` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build formnhansu` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build formnhansu`, go to the dist folder `cd dist/formnhansu` and run `npm publish`.

## Running unit tests

Run `ng test formnhansu` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Using
Using with dialog:

    openNhansu() {
        const dialogRef = this._matDialog.open(FormnhansuComponent, {
            disableClose: false,
            data: this.data
        });

        dialogRef.afterClosed()
            .subscribe((result) => {
                console.log(result);

            });
    }
Data:
    dataNhansu = {
        selectionMode: 'single',
        nhansus: this.dataNhansu, // similar to listSelected
        listSelected: [{
            "nsId": 115000000000824,
            "donviId": 115,
            "madonvi": null,
            "tendonvi": null,
            "sohieu": "000481",
            "isAnh": null,
            "tenkhaisinh": "Nguyễn Tú Anh", // Using to view
            "tendanggoi": null,
            "gioitinh": false,
            "strGioitinh": "Nữ",
            "chucvu": "Nhóm trưởng",
            "phongbanId": 115000000010843,
            "strPhongbanId": null,
            "tenphong": "Phòng Tổ chức - Hành chính", // Using to view, also can be "phongban"
            "vtricdanh": "Nhóm trưởng", // Using to view, also can be "chucdanh"
            "vtriId": null,
            "nghecnktId": null,
        }],
        boChon: true,
        idField: 'nsId'
    }
