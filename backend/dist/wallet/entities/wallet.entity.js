"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
class Wallet {
    constructor(id, currency, balance, transactions = []) {
        this.id = id;
        this.currency = currency;
        this.balance = balance;
        this.transactions = transactions;
    }
}
exports.Wallet = Wallet;
