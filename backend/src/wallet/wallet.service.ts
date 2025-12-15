import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Wallet } from './entities/wallet.entity';

@Injectable()
export class WalletService {
  private wallets = new Map<string, Wallet>();

  create(currency: 'USD'): Wallet {
    const wallet = new Wallet(randomUUID(), currency, 0);
    this.wallets.set(wallet.id, wallet);
    return wallet;
  }
}
