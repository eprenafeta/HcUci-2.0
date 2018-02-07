import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService {

    constructor( public http: HttpClient ){ }
    UserPass = {};
    
    login( email: string, password: string) {
        console.log(email + password);
        this.UserPass = {email: email, password: password };
        let url = 'http://localhost:3000/login';
        return this.http.post(url, this.UserPass).pipe( map(
            (resp: any) => {
                localStorage.setItem('datos_institucion', JSON.stringify(resp.institucion));
                return resp;
          }));

    }

}
