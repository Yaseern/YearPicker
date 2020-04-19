<div align="center">
  <h1>ngy-year-picker</h1>
  <br>
  <h4>A year picker and financial quarter picker for Angular</h4>
</div>

# YearPickerLibrary

DEMO: Update soon

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

<NgY-YearPicker [yearModel]="model1" (yearModelChange)="onChangeDoSomething1()"></NgY-YearPicker>

<NgY-YearPicker [yearModel]="model2" (yearModelChange)="onChangeDoSomething2()" [isQuarterYear]="true"></NgY-YearPicker>


## Options

| Option            | Type                           | Default           | Description                                                                                                                                     |
| ----------------- | ------------------------------ | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| yearModel         | input                          |                   | which binds select stores the user value in a variable   
                                                 |
| yearModelChange   | event                          |                   | On Change event when select the option                                                                        |
| isRequired        | boolean                        | false             | If field is required then this should set true                                                                |
| isQuarterYear     | boolean                        | false             | This should set true If you want to show Quarter year picker  ('Q1', 'Q2', 'Q3', 'Q4')
                                                 |
| fieldName         | string                         | empty             | This name is name attribure in tag (ex: <select name=""></select>)
                                                 |                                                                                             

## License

MIT

---

> GitHub [@Yaseern](https://github.com/Yaseern) &nbsp;&middot;&nbsp;
