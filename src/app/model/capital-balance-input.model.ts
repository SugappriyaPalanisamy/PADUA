

export class CapitalBalanceInputModel {
  Salary: number;
  ContributionRate: number;
  InflationRate: number;
  Earnings: number;
  Fees: number;
  Tax: number;
  WithdrawalRate: number;
  WithdrawalStarts: number;

  constructor() {
    this.Salary = 100000;
    this.ContributionRate = 9.5;
    this.InflationRate = 3;
    this.Earnings = 7.5;
    this.Fees = 1.5;
    this.Tax = 15;
    this.WithdrawalRate = 5;
    this.WithdrawalStarts = 66;
  }
}

