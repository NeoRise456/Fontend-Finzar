export class Transaction {
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
    amount: number;
    date: string;
    note: string;

    constructor(
        id = 0,
        walletId = 0,
        walletName = '',
        walletBalance = 0,
        typeId = 0,
        typeName = '',
        amount = 0,
        date = new Date().toISOString().split('T')[0], // Format date to only show the date
        note = ''
    ) {
        this.id = id;
        this.wallet = {
            walletId: walletId,
            name: walletName,
            balance: walletBalance
        };
        this.type = {
            id: typeId,
            name: typeName
        };
        this.amount = amount;
        this.date = date;
        this.note = note;
    }
}