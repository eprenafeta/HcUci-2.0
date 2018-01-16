import {RouterModule, Routes} from '@angular/router';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PacienteComponent } from './pages/pacientes/paciente.component';

const appRoutes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'pacientes' , component: PacientesComponent},
    {path: 'paciente/:id', component: PacienteComponent},
    {path: '', component: DashboardComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
