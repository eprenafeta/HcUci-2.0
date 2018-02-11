import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Rutas
import { APP_ROUTES } from './app.routes';
import { DragDropDirectiveModule} from 'angular4-drag-drop';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { PacienteComponent } from './pages/pacientes/paciente.component';
import { InternacionComponent } from './pages/internacion/internacion.component';
import { PacienteDashboardComponent } from './pages/pacientes/dashboard/dashboard.component';
import {NgDatepickerModule} from 'ng2-datepicker';
import {Ng2EventsModule} from 'ng2-events';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Servicios
import { ServiceModule } from './services/service.module';
import { PacienteModule } from './modules/paciente/paciente.module';
import { PrescripcionComponent } from './pages/internacion/prescripcion/prescripcion.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardInternacionComponent} from './pages/internacion/dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationBuilder } from '@angular/platform-browser/animations/src/animation_builder';






@NgModule({
  declarations: [
    AppComponent,
    PacientesComponent,
    UsuariosComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    DashboardInternacionComponent,
    PacienteDashboardComponent,
    PacienteComponent,
    InternacionComponent,
    PrescripcionComponent,
    PagesComponent,
    LoginComponent
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
    ServiceModule,
    DragDropDirectiveModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule
  ],
  exports: [Ng2EventsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
