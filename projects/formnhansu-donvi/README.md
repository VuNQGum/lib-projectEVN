# FormnhansuDonvi

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.0.

## Code scaffolding

Run `ng generate component component-name --project formnhansu-donvi` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project formnhansu-donvi`.
> Note: Don't forget to add `--project formnhansu-donvi` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build formnhansu-donvi` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build formnhansu-donvi`, go to the dist folder `cd dist/formnhansu-donvi` and run `npm publish`.

## Running unit tests

Run `ng test formnhansu-donvi` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Using
Using with dialog:

    openNhansuDonvi() {
        const dialogRef = this._matDialog.open(FormnhansuDonviComponent, {
            disableClose: false,
            data: this.dataNhansuDonvi
        });

        dialogRef.afterClosed()
            .subscribe((result) => {
                console.log(result);

            });
    }
Data:

    dataNhansuDonvi = {
        apiDonvi: `http://10.1.117.101:3002/hrms/employe/v1/donvi/getDsDonviTructhuoc/115`, // api lay donvi truc thuoc
        apiNhansu: `http://10.1.117.101:3002/hrms/employe/v1/hoso/getDsNsCuaDonviFormSelect`, // api lay danh sach nhan su thuoc don vi (khong can /{donviId})
        userDonvi: {
            organizationId: 115,
            orgName: 'test'
        }, // Don vi nhan su hien tai 
        hthiSohieu: true,
        boChon: true,
        selectionMode: 'checkbox',
        listSelected: [],
        idField: 'nsId' // Gia tri mac dinh la 'nsID',
        ignoreAuthor: true // Gia tri mac dinh là false (Loai bo phan quyen xem cac dvi truc thuoc),
        rightTructhuoc: false // Nhan su hien tai co quyen xem cac dvi truc thuoc khong
    }
