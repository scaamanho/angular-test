import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test';

  users = [{name: "sandino"}, {name: "paladino"}, {name: "masuterio"}, {name: "neisedes"}, {name: "malandrin"}, {name: "lutino"}];
}
