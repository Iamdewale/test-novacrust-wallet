import { Transaction } from './transaction.entity';

export class Wallet {
  constructor(
    public readonly id: string,
    public readonly currency: 'USD',
    public balance: number,
    public transactions: Transaction[] = [],
  ) {}
}
