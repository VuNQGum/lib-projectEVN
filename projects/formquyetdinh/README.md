# Formquyetdinh

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.0.

## Code scaffolding

Run `ng generate component component-name --project formquyetdinh` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project formquyetdinh`.

> Note: Don't forget to add `--project formquyetdinh` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build formquyetdinh` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build formquyetdinh`, go to the dist folder `cd dist/formquyetdinh` and run `npm publish`.

## Running unit tests

Run `ng test formquyetdinh` to execute the unit tests via [Karma](https://karma-runner.github.io).

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
    data =
       {
          apiGetDsQdByNam: DanhMucURL.getDsQdnoidungByDvIdAndNam(), // Api lay QD theo donviId va nam
          donviId: this.donviId, // Don vi
          dsLoaiQdLoaitru: ['HDLD', 'LUONG'], // Danh sách loại QĐ loại trừ
          dsLoaiQdBaogom: ['DIEUDONG', 'KTHUONG'] // Danh sách loại QĐ bao gồm, TH không có mặc định lấy tất
        },

```
