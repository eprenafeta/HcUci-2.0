import { Component, OnInit } from '@angular/core';
import { InternacionService } from '../../../services/service.index';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardInternacionComponent implements OnInit {
  internacion = [];
  constructor(
    public _internacionService: InternacionService
  ) {
    
   }

  ngOnInit() {
    this._internacionService.cargaInternacion('5a7ce15f4ce56e2d57db6578').subscribe((resp) => {
      this.internacion = resp.internacion;
      console.log(this.internacion);
    });
  }

}
