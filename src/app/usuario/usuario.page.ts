import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  listado;
  
  datos:any={
    id_usuarios:0,
    id_peleador:0,
    status:null

  }

  constructor(private http:HttpClient) { 

    this.http.get("http://localhost/ionicdb/peliadorestable.php?id_usuarios="+this.datos.id_usuarios+"&id_peleador="+this.datos.id_peleador+"&status="+this.datos.status+"").subscribe(snap=>{
      console.log(snap);
      this.listado=snap;
    
      
  });
  }


  guardarid(id_usuarios,id_peleador,status){
    this.datos.id_usuarios = 9;
    this.datos.id_peleador = id_peleador;
    this.datos.status = status;
    console.log(this.datos.id_usuarios);
    console.log(this.datos.id_peleador);
    console.log(this.datos.status);
    this.http.get("http://localhost/ionicdb/peliadoresid.php?id_usuarios="+this.datos.id_usuarios+"&id_peleador="+this.datos.id_peleador+"&status="+this.datos.status+"").subscribe(snap=>{
      console.log(snap);
      this.listado=snap;
  });
  }

  ngOnInit() {
  }

}
