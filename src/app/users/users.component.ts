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
  selectedName: string;

  constructor() { }

  ngOnInit() {
  }

  add (e):void {
    this.counter ++;
    console.log(e);
    this.generateEvent(e);
  }

  less (e):void {
    this.counter --;
    if(this.counter < 0)
      this.counter =0;
    console.log(e);
    this.generateEvent(e);
  }

  //Emitimos un evento al padre
  clickedName(e):void {
    console.log(e);
    console.log( e.target.textContent)
    this.generateEvent(e);
  }

  generateEvent(e):void {
    this.value_clicked.emit({name: this.value, counter: this.counter, event: e})
  }
}
