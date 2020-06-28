import { Component, OnInit } from '@angular/core';
import { Preferencia } from 'src/app/models/preferencia';
import { PreferenciasService } from 'src/app/services/preferencias.service';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-add-preferencia',
  templateUrl: './add-preferencia.component.html',
  styleUrls: ['./add-preferencia.component.css']
})
export class AddPreferenciaComponent implements OnInit {

  preferencia: Preferencia;
  constructor(private service: PreferenciasService, private serviceSecurity: SecurityService) { }

  ngOnInit() {
    this.preferencia = new Preferencia();
  }

  onSubmit(){
    this.service.addPreferencia(this.preferencia).subscribe( p => {
      this.preferencia=new Preferencia;
    });
  }

  logout(){
    this.serviceSecurity.cerrarSesion();
  }

}
