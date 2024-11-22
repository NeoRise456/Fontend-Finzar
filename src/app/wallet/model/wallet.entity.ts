export class Wallet {
  id: number;
  name: string;
  balance: number;
  userId: number;

  constructor(
      id = 0,
      name = '',
      balance = 0,
      userId = 0,
  ) {
    this.id = id;
    this.name = name;
    this.balance = balance;
    this.userId = userId;
  }
}
