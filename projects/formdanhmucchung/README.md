# Formdanhmucchung

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.0.

## Code scaffolding

Run `ng generate component component-name --project formdanhmucchung` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project formdanhmucchung`.
> Note: Don't forget to add `--project formdanhmucchung` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build formdanhmucchung` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build formdanhmucchung`, go to the dist folder `cd dist/formdanhmucchung` and run `npm publish`.

## Running unit tests

Run `ng test formdanhmucchung` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Using
Using with dialog:

    openDanhmuc() {
        const dialogRef = this._matDialog.open(FormdanhmucchungComponent, {
            disableClose: true,
            data: this.dataDanhmuc,
        });

        dialogRef.afterClosed()
            .subscribe((result) => {
                console.log(result);

            });
    }
Data:

    dataDanhmuc = {
        data: this.data,
        title: 'Phong ban',
        selectionMode: 'multiple',
        idField: 'organizationId', // name id field of object
        width: '1000px',
        columns: [
            {
                header: 'Tên đơn vị',
                field: 'orgName',
                styles: { 'width': '60%' },
            },
            {
                header: 'Mã',
                field: 'orgCode',
                styles: { 'width': '40%' },
            }
        ]
    }
