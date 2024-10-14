export class Wallet {
  id: number;
  userId: number;
  name: string;
  balance: number;
  total_balance: number;

  constructor(
    id = 0,
    name = '',
    userId = 0,
    balance = 0,
    total_balance = 0
  ) {
    this.id = id;
    this.name = name;
    this.userId = userId;
    this.balance = balance;
    this.total_balance = total_balance;
  }
}
