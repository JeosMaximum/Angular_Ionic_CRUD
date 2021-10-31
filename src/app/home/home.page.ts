import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { CrudService } from '../service/crud.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



  datos:any={
    id_usuarios:0,
    nombre:'',
    apellido:'',
    apodo:'',
    peso:0,
    experiencia:'',
    edad:0,
    correo:'',
    contrasena:''

  }
  
  constructor(private http:HttpClient) {}


  validar(){
    this.http.get("http://localhost/ionicdb/validacion.php?correo="+this.datos.correo+"&contrasena="+this.datos.contrasena+"&peso="+this.datos.peso+"").subscribe(snap=>{
      console.log(snap);
  });
  

  }

}
