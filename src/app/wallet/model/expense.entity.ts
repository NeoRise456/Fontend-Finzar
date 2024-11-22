export class Expense {
  id: number;
  wallet: {
    walletId: number;
    name: string;
    balance: number;
  };
  categoryName: string;
  periodRecurrenceName: string;

  constructor(
      id = 0,
      walletId = 0,
      walletName = '',
      walletBalance = 0,
      categoryName = '',
      periodRecurrenceName = ''
  ) {
    this.id = id;
    this.wallet = {
      walletId: walletId,
      name: walletName,
      balance: walletBalance,
    };
    this.categoryName = categoryName;
    this.periodRecurrenceName = periodRecurrenceName;
  }
}
