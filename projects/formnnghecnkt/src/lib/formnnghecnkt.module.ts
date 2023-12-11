import { NgModule } from '@angular/core';
import { FormnnghecnktComponent } from './formnnghecnkt.component';
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
import { TreeModule } from 'primeng/tree';



@NgModule({
  declarations: [
    FormnnghecnktComponent
  ],
  imports: [
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
    TreeModule
  ],
  exports: [
    FormnnghecnktComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class FormnnghecnktModule { }
