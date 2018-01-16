import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService, PacienteService } from './service.index';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    PacienteService,
    SidebarService
  ],
  declarations: []
})
export class ServiceModule { }
