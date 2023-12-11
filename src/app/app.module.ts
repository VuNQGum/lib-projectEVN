import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomButton2Module } from 'projects/custom-button2/src/public-api';
import { FormdonviModule } from 'projects/formdonvi/src/public-api';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { FormnhansuModule } from 'projects/formnhansu/src/lib/formnhansu.module';
import { FormnhansuDonviModule } from 'projects/formnhansu-donvi/src/lib/formnhansu-donvi.module';
import { FormphongbanModule } from 'projects/formphongban/src/public-api';
import { FormnnghecnktModule } from 'projects/formnnghecnkt/src/public-api';
import { FormquyetdinhModule } from 'projects/formquyetdinh/src/public-api';
import { FormdonviTreeModule } from 'projects/formdonvi-tree/src/public-api';
import { FormdanhmucchungModule } from 'projects/formdanhmucchung/src/public-api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomButton2Module,
    FormdonviModule,
    FormnhansuModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatBadgeModule,
    MatDividerModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    TableModule,
    DividerModule,
    FormnhansuDonviModule,
    FormphongbanModule,
    FormnnghecnktModule,
    FormquyetdinhModule,
    FormdonviTreeModule,
    FormdanhmucchungModule,
    DropdownModule,
    MatDatepickerModule,
    MatNativeDateModule 
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'vi-VN' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
