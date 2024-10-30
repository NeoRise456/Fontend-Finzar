export class Transaction {
    id: number;
    transactionTypeId: number;
    walletId: number;
    amount: number;
    date: Date;
    note: string;
    categoryId: number;

    constructor(
        id = 0,
        transactionTypeId = 0,
        walletId = 0,
        amount = 0,
        date = new Date(),
        note = '',
        categoryId = 0
    ) {
        this.id = id;
        this.transactionTypeId = transactionTypeId;
        this.walletId = walletId;
        this.amount = amount;
        this.date = date;
        this.note = note;
        this.categoryId = categoryId;
    }
}
