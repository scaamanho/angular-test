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

  evento_seleccionado:object;
  string_event:string;
  homeService:HomeService

  constructor(homeService:HomeService) 
  {
    this.homeService = homeService;
    this.users = homeService.listaDeUsuarios(null);
    this.evento_seleccionado = homeService.defaultEvent();
  }

  ngOnInit() {
  }

  mostrarEvento (e):void{
    this.evento_seleccionado = e;
    console.log(e)
    this.string_event = JSON.stringify(e, null, 2);
  }

  clean (e): void {
    this.evento_seleccionado =this.homeService.defaultEvent();
    this.string_event = ""
  }
}
