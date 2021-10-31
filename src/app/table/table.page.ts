import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {

  listado;

  datos:any={
    id_usuarios:0,
    id_peleador:0,
    status:null

  }
  
  constructor(private http:HttpClient ) { 
    
    this.http.get("http://localhost/ionicdb/consultados.php").subscribe(snap=>{
        console.log(snap);
        this.listado=snap;
        this.datos.id_usuarios=9;
    });
  }

  iddato(){
    this.http.get("http://localhost/ionicdb/consultaid.php?id="+this.datos.id+"").subscribe(snap=>{
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

  consultapeleadores(){
    this.datos.id_usuarios = 9;
  }  

  ngOnInit() {
}

}
