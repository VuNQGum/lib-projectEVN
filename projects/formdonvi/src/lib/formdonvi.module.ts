import { NgModule } from '@angular/core';
import { FormdonviComponent } from './formdonvi.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    FormdonviComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatBadgeModule,
    MatDialogModule,
    MatDividerModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    TableModule,
  ],
  exports: [
    FormdonviComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class FormdonviModule { }
