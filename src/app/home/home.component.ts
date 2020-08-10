import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ HomeService ]
})
export class HomeComponent implements OnInit {

  users:Array<object>;

  title = "Angular Rocks!!"

  evento_seleccionado:String = ""

  constructor(homeService:HomeService) 
  {
    this.users = homeService.listaDeUsuarios(null);
  }

  ngOnInit() {
  }

  mostrarEvento (e):void{
    this.evento_seleccionado = e.name;
  }

}
