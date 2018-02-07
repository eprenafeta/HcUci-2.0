import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router'
import { LoginService } from '../services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  error_mensaje = {ok: true, mensaje: ''};
  constructor(  public _loginService: LoginService,
                public router: Router,

              ) { }

  ngOnInit() {
    this.formLogin = new FormGroup({
      email: new FormControl,
      password: new FormControl
    }
    );
  }

  logear() {
    this._loginService.login( this.formLogin.value.email , this.formLogin.value.password ).subscribe((resp) => {
      if (resp.ok === true) {
        console.log(resp);
        this.router.navigate(['/dashboard']);
      } else {
        this.error_mensaje = resp;
      }
    });
  }

}
