<div align="center">
  <h1>ngy-year-picker</h1>
  <br>
  <h4>A year picker and financial quarter picker for Angular. Support for template driven and reactive forms</h4>
</div>

# YearPickerLibrary

DEMO: https://yaseern.github.io/awesomeAngular/year

## Dependencies
Latest version available for all version of Angular

## Install

```bash
npm install ngy-year-picker
```

## Setup

- If you are using angular-cli you can add it to your angular.json

```ts
"styles": [
  "styles.scss",
  "node_modules/bootstrap/dist/css/bootstrap.min.css" // try adding '../' if you're using bootstrap
]
```

**step 1:** add NgYasYearPickerModule to app NgModule or import to the shared module

```typescript
import { CommonModule } from '@angular/common';

import { NgYasYearPickerModule } from 'ngy-year-picker/ngy-year-picker';

@NgModule({
  imports: [
    CommonModule,
    NgYasYearPickerModule// NgYasYearPickerModule added
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent]
})
class AppModule {}
```

```html
<ngy-year-picker [(ngModel)]="model1" (change)="onChangeDoSomething1()" id="year-picker1"></ngy-year-picker>

<ngy-year-picker [(ngModel)]="model2" (change)="onChangeDoSomething2()" id="year-picker2" [isQuarterYear]="true"></ngy-year-picker>

```

## Options

| Option            | Type                           | Default           | Description                                                                                                                   |
| ----------------- | ------------------------------ | ----------------- | -----------------------------------------------------------------------------------------------------------------------------|
| isRequired        | boolean                        | false             | If field is required then this should set true                                                                               |
| isQuarterYear     | boolean                        | false             | This should set true If you want to show Quarter year picker  ('Q1', 'Q2', 'Q3', 'Q4')                                        |
| fieldName         | string                         | empty             | This name is name attribure in tag (ex: <select name=""></select>)                                                            | 
| isDisabled        | boolean                        | false             | If field disabled then this should set true                                                                                  | 

## License

MIT

---

> GitHub [@Yaseern](https://github.com/Yaseern) &nbsp;&middot;&nbsp;