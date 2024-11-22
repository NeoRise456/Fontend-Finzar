export class Wallet {
  id: number;
  name: string;
  balance: number;
  user: {
    userId: number;
    username: string;
  };

  constructor(
      id = 0,
      name = '',
      balance = 0,
      userId = 0,
      username = ''
  ) {
    this.id = id;
    this.name = name;
    this.balance = balance;
    this.user = {
      userId: userId,
      username: username,
    };
  }
}
