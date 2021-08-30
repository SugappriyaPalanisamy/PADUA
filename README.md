# PADUA

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## Install Dependencies

Run `npm install` to install required dependencies

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Approach

Used `Bootstrap` for UI

Created  `Template Driven form` to get required input from the user, added required validation for the fields and created `Custom validator` to check `Withdrawal Starts should be greater than 45 less than 90`

Form values are binded with `CapitalBalanceInputModel`

Added calculate method to create output model `CapitalBalanceOutputModel[]` by followwing calcualtion as shared `Excel`

Created child components(`TableViewComponent` and `LineChartComponent`) to display the Capital Balance Projection(CapitalBalanceOutputModel[])

Used `chart.js` and `ng2-charts` to render line chart


