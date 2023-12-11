import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomButton2Component } from './custom-button2.component';
import { AuthInterceptor } from './auth.interceptor';



@NgModule({
  declarations: [
    CustomButton2Component
  ],
  imports: [
    MatInputModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule
  ],
  exports: [
    CustomButton2Component
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class CustomButton2Module { }
