import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService,
         SidebarService,
         PacienteService,
         InternacionService,
         PrescripcionService,
         } from './service.index';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    PacienteService,
    PrescripcionService,
    SidebarService,
    InternacionService
  ],
  declarations: []
})
export class ServiceModule { }
