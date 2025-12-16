"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
class Transaction {
    constructor(type, amount, date = new Date(), relatedWalletId) {
        this.type = type;
        this.amount = amount;
        this.date = date;
        this.relatedWalletId = relatedWalletId;
    }
}
exports.Transaction = Transaction;
