"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
// export class Wallet {
//   constructor(
//     public readonly id: string,
//     public readonly currency: 'USD',
//     public balance: number,
//     public transactions: Transaction[] = [],
//   ) {}
// }
class Wallet {
    constructor(id, currency, balance) {
        this.id = id;
        this.currency = currency;
        this.balance = balance;
        this.transactions = [];
    }
}
exports.Wallet = Wallet;
