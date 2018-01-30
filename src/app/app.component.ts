import { Component } from '@angular/core';
import { SidebarService, PacienteService, InternacionService } from './services/service.index';
import swal from 'sweetalert';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public pacienteActivo: String;
  constructor() {
  this.pacienteActivo = 'prenafeta compadre';
}

    ngOnInit() {
      console.log(this.pacienteActivo);
    }
}
