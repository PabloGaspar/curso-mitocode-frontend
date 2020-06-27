import { Component, OnInit } from '@angular/core';
import { Preferencia } from 'src/app/models/preferencia';
import { PreferenciasService } from 'src/app/services/preferencias.service';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-preferencias',
  templateUrl: './preferencias.component.html',
  styleUrls: ['./preferencias.component.css']
})
export class PreferenciasComponent implements OnInit {

  preferencias: Preferencia[];

  constructor(private service: PreferenciasService, private serviceSecurity: SecurityService) { }

  ngOnInit() {
    this.service.getPreferencias().subscribe( preferencias => {
      this.preferencias = preferencias;
    });
  }

  logout(){
    this.serviceSecurity.cerrarSesion();
  }

}
