import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-createusuario',
  templateUrl: './createusuario.page.html',
  styleUrls: ['./createusuario.page.scss'],
})
export class CreateusuarioPage implements OnInit {

  constructor(private http:HttpClient) { }

  datos:any={
    nombre:'',
    apellido:'',
    apodo:'',
    peso:0,
    experiencia:'',
    edad:0,
    correo:'',
    contrasena:''

  }

  ngOnInit() {
  }

  save(){
    this.http.get("http://localhost/ionicdb/guardar.php?nombre="+this.datos.nombre+"&apellido="+this.datos.apellido+"&apodo="+this.datos.apodo+"&peso="+this.datos.peso+"&experiencia="+this.datos.experiencia+"&edad="+this.datos.edad+"&correo="+this.datos.correo+"&contrasena="+this.datos.contrasena+"").subscribe(snap=>{
      console.log(snap);
  });

  }

}
