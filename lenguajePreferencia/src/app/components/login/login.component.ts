import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TOKEN_NAME, PARAM_USUARIO, REFRESH_TOKEN_NAME, ACCESS_TOKEN_NAME } from '../../_shared/constants';
import { SecurityService } from '../../services/security.service';
import { ErrorComponent } from '../error/error.component';
import { RespuestaApi } from '../../models/RespuestaApi';
import { LoginDTO } from '../../models/LoginDTO';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: LoginDTO;
  
  constructor(
    private router: Router,
    private securityService: SecurityService,
    private dialog: MatDialog){
      this.login = new LoginDTO();
  }

  ngOnInit(){

  }

  onSubmit() {
    const self = this;
    this.securityService.login(this.login).subscribe((data: RespuestaApi)=>{
      if(data.status == 'OK'){
        sessionStorage.setItem(TOKEN_NAME, data.idToken);
        sessionStorage.setItem(REFRESH_TOKEN_NAME, data.refreshToken);
        sessionStorage.setItem(ACCESS_TOKEN_NAME, data.accessToken);

        setTimeout(function() {
          self.securityService.validarToken().subscribe((dato: any)=>{
            sessionStorage.setItem(PARAM_USUARIO, JSON.stringify(dato.body));
            var role = dato.body.authorities[0].authority;
            if(role === 'ROLE_USER'){
              self.router.navigate(["addpreferencia"]);
            } else {
              self.router.navigate(["listado"]);
            }
            
          });
        }, 300);
        
        
        
        
      }else{
        this.dialog.open(ErrorComponent, {
          width: '60%',
          height: '60%',
          data: { 
            error: data.body,
            dato: data,
            usuario: this.login.username 
          }
        });
      }
  }, (error) => {
    this.dialog.open(ErrorComponent, {
        width: '60%',
        height: '60%',
        data: { error: error }
      });
    });
  }


}
