
export class Expense {
  id: number;
  walletId: number;
  amount: number;
  category_id: number;
  note: string;
  date: string;
  recurrent_id: number;

  constructor(
    id = 0,
    walletId = 0,
    amount = 0,
    category_id = 0,
    note = '',
    date = '',
    recurrent_id = 0
  ) {
    this.id = id;
    this.walletId = walletId;
    this.amount = amount;
    this.category_id = category_id;
    this.note = note;
    this.date = date;
    this.recurrent_id = recurrent_id;
  }
}
