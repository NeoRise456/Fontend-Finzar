export class SavingTransaction {
    id: number;
    wallet: {
        walletId: number;
        name: string;
        balance: number;
    };
    type: {
        id: number;
        name: string;
    };
    note: string;
    amount: number;
    date: Date;

    constructor(
        id = 0,
        walletId = 0,
        walletName = '',
        walletBalance = 0,
        typeId = 0,
        typeName = '',
        note = '',
        amount = 0,
        date = new Date()
    ) {
        this.id = id;
        this.wallet = {
            walletId: walletId,
            name: walletName,
            balance: walletBalance,
        };
        this.type = {
            id: typeId,
            name: typeName,
        };
        this.note = note;
        this.amount = amount;
        this.date = date;
    }

    getFormattedDate(): string {
        return this.date.toISOString().split('T')[0];
    }
}
