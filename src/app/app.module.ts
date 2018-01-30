import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Rutas
import { APP_ROUTES } from './app.routes';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PacienteComponent } from './pages/pacientes/paciente.component';
import { InternacionComponent } from './pages/internacion/internacion.component';
import {NgDatepickerModule} from 'ng2-datepicker';
import {Ng2EventsModule} from 'ng2-events';

// Servicios
import { ServiceModule } from './services/service.module';
import { PacienteModule } from './modules/paciente/paciente.module';
import { PrescripcionComponent } from './pages/internacion/prescripcion/prescripcion.component';




@NgModule({
  declarations: [
    AppComponent,
    PacientesComponent,
    UsuariosComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    PacienteComponent,
    InternacionComponent,
    PrescripcionComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    RouterModule,
    ReactiveFormsModule,
    Ng2EventsModule,
    FormsModule,
    CommonModule,
    NgDatepickerModule,
    PacienteModule,
    ServiceModule
  ],
  exports: [Ng2EventsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
