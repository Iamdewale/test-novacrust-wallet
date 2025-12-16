export type TransactionType = 'FUND' | 'TRANSFER_IN' | 'TRANSFER_OUT';

export class Transaction {
  constructor(
    public readonly type: TransactionType,
    public readonly amount: number,
    public readonly date: Date = new Date(),
    public readonly relatedWalletId?: string,
  ) {}
}
