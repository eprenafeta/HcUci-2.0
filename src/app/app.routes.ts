import {RouterModule, Routes} from '@angular/router';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PacienteComponent } from './pages/pacientes/paciente.component';
import { InternacionComponent } from './pages/internacion/internacion.component';
import { PrescripcionComponent } from './pages/internacion/prescripcion/prescripcion.component';
import { PacienteDashboardComponent } from './pages/pacientes/dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { DashboardInternacionComponent } from './pages/internacion/dashboard/dashboard.component';



const appRoutes: Routes = [
    {    path: '',
         component: PagesComponent,
         children: [{path: 'dashboard', component: DashboardComponent},
                     {path: 'paciente_dashboard/:id', component: PacienteDashboardComponent },
                     {path: 'pacientes' , component: PacientesComponent},
                     {path: 'paciente/:id', component: PacienteComponent},
                     {path: 'internacion_dashboard/:id', component: DashboardInternacionComponent},
                     {path: 'internacion/:modo', component: InternacionComponent},
                     {path: 'internacion/:modo/:id', component: InternacionComponent},
                     {path: 'prescripcion/:id', component: PrescripcionComponent}
        ]
    },
    {path: 'login', component: LoginComponent}
   // {path: '', component: DashboardComponent} 
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
