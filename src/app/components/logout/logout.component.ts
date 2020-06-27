import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../../services/security.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private serviceSecurity: SecurityService) { }

  ngOnInit() {
    this.serviceSecurity.cerrarSesion();
  }

}
