import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input() value : any = "algo";
  @Output() value_clicked: any = new EventEmitter();
  counter: any = 0;

  constructor() { }

  ngOnInit() {
  }

  update (e):void 
  {
    this.counter ++;
    console.log(e);
  }

  //Emitimos un evento al padre
  clickedName(e):void{
    console.log(e)
    console.log( e.target.textContent)
    this.value_clicked.emit({name: e.target.textContent})
    console.log( e.target.textContent)
  }

}
