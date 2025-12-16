import { Transaction } from './transaction.entity';

// export class Wallet {
//   constructor(
//     public readonly id: string,
//     public readonly currency: 'USD',
//     public balance: number,
//     public transactions: Transaction[] = [],
//   ) {}
// }

export class Wallet {
  constructor(
    public id: string,
    public currency: string,
    public balance: number,
  ) {
    this.transactions = [];
  }

  transactions: Transaction[];
}
