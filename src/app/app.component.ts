import { Component } from '@angular/core';

@Component({
  selector: 'year-p-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Year Picker Library';

  model: any;
  model2: any;
  currentYear = new Date().getFullYear();

  isQuater = true

  onChangeDoSomething() {
    alert(this.model)
  }

  onChangeDoSomething2() {
    alert(this.model2)
  }
}
