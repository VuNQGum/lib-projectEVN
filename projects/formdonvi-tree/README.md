# FormdonviTree

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.0.

## Code scaffolding

Run `ng generate component component-name --project formdonvi-tree` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project formdonvi-tree`.
> Note: Don't forget to add `--project formdonvi-tree` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build formdonvi-tree` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build formdonvi-tree`, go to the dist folder `cd dist/formdonvi-tree` and run `npm publish`.

## Running unit tests

Run `ng test formdonvi-tree` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Using
Using with dialog:

    openNhansuDonvi() {
        const dialogRef = this._matDialog.open(FormdonviTreeComponent, {
        disableClose: false,
        data: {
            donvis: this.listDonvi,
            boChon: true
        }
        });

        dialogRef.afterClosed()
        .subscribe((result) => {

        });
    }
Data:

    dataNhansuDonvi = {
        orgName: null,
        organizationId: null,
        orgParentId: null,
        orgCode: null
    }