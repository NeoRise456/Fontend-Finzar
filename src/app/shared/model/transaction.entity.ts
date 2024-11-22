export class Transaction {

    id: number;
    wallet: {
        walletId: number;
        walletName: string;
        balance: number;
    };
    type: {
        typeId: number;
        typeName: string;
    };
    note: string;
    amount: number;
    date: string;

    constructor(
        id = 0,
        walletId = 0,
        walletName = '',
        balance = 0,
        typeId = 0,
        typeName = '',
        note = '',
        amount = 0,
        date = ''
    ) {
        this.id = id;
        this.wallet = {
            walletId: walletId,
            walletName: walletName,
            balance: balance
        };
        this.type = {
            typeId: typeId,
            typeName: typeName
        };
        this.note = note;
        this.amount = amount;
        this.date = date;
    }
}
