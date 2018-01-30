import {RouterModule, Routes} from '@angular/router';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PacienteComponent } from './pages/pacientes/paciente.component';
import { InternacionComponent } from './pages/internacion/internacion.component';
import { PrescripcionComponent } from './pages/internacion/prescripcion/prescripcion.component';


const appRoutes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'pacientes' , component: PacientesComponent},
    {path: 'paciente/:id', component: PacienteComponent},
    {path: 'internacion/:modo', component: InternacionComponent},
    {path: 'internacion/:modo/:id', component: InternacionComponent},
    {path: 'prescripcion/:id', component: PrescripcionComponent},
    {path: '', component: DashboardComponent} 
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
