import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CapitalBalanceInputModel } from './model/capital-balance-input.model';
import { ICapitalBalanceOutputModel } from './model/capital-balance-output.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Capital Balance Projection';

  public submitted: boolean;
  public capitalBalanceInput: CapitalBalanceInputModel;
  public capitalBalanceOutput: ICapitalBalanceOutputModel[];
  private age: number = 45;
  private year: number = 2020;
  private startBalance: number = 300000;

  @ViewChild('calculatorForm') public form: NgForm;

  constructor() {
    this.capitalBalanceInput = new CapitalBalanceInputModel();
  }

  ngOnInit(): void {}
 
  reset() {
    this.form.reset();
    this.submitted = false;
    this.capitalBalanceOutput = null;
  }
  calculate() {
    this.resetValue();
    for (let i = 0; i < 51; i++) {

      let contributions = 0;
      //contribution rate
      if (!(this.age >= this.capitalBalanceInput.WithdrawalStarts)) {
        if (i == 0)
          contributions = this.capitalBalanceInput.Salary * (this.capitalBalanceInput.ContributionRate / 100);
        else
          contributions = this.capitalBalanceOutput[i - 1].Contributions * (1 + this.capitalBalanceInput.InflationRate / 100);
      }

      let earnings = (this.startBalance + contributions) * (this.capitalBalanceInput.Earnings/100);
      let fees = (this.startBalance + contributions + earnings) * (this.capitalBalanceInput.Fees/100);
      let tax = (contributions + earnings) * (this.capitalBalanceInput.Tax / 100);
      let withdrawals = this.age >= this.capitalBalanceInput.WithdrawalStarts ? (this.startBalance * this.capitalBalanceInput.WithdrawalRate/100) : 0;
      let endBalance = this.startBalance + contributions + earnings - fees - tax - withdrawals;

      let value: ICapitalBalanceOutputModel = {
        Age: this.age,
        Year: this.year,
        StartBalance: this.startBalance,
        Contributions: contributions,
        Earnings: earnings,
        Fees: fees,
        Tax: tax,
        Withdrawals: withdrawals,
        EndBalance: endBalance
      };
      this.capitalBalanceOutput.push(value);
      this.age += 1;
      this.year += 1;
      this.startBalance = endBalance;
    }
    console.log(this.capitalBalanceOutput);
    this.submitted = true;
  }
  private resetValue():void {
    this.capitalBalanceOutput = [];
    this.age = 45;
    this. year = 2020;
    this.startBalance = 300000;
  }
}
