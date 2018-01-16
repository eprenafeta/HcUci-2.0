import { Component } from '@angular/core';
import { SidebarService, PacienteService } from './services/service.index';
import swal from 'sweetalert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
