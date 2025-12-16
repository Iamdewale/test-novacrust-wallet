import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from "@nestjs/common";
import { randomUUID } from "crypto";
import { Wallet } from "./entities/wallet.entity";
import { Transaction } from "./entities/transaction.entity";

@Injectable()
export class WalletService {
  private wallets = new Map<string, Wallet>();

//   create(currency: "USD"): Wallet  
  create(currency: string): Wallet {
    const wallet = new Wallet(randomUUID(), currency, 0);
    this.wallets.set(wallet.id, wallet);
    return wallet;
  }

  fund(walletId: string, amount: number): Wallet {
    const wallet = this.wallets.get(walletId);

    if (!wallet) {
      throw new NotFoundException("Wallet not found");
    }

    wallet.balance += amount;
    wallet.transactions.push(new Transaction("FUND", amount));
    return wallet;
  }
transfer(fromId: string, toId: string, amount: number) {
  if (amount <= 0) {
    throw new BadRequestException("Amount must be greater than zero");
  }

  if (fromId === toId) {
    throw new BadRequestException("Cannot transfer to the same wallet");
  }

  const sender = this.wallets.get(fromId);
  const receiver = this.wallets.get(toId);

  if (!sender) {
    throw new NotFoundException("Sender wallet not found");
  }

  if (!receiver) {
    throw new NotFoundException("Receiver wallet not found");
  }

  if (sender.balance < amount) {
    throw new BadRequestException("Insufficient balance");
  }

  sender.balance -= amount;
  receiver.balance += amount;

  sender.transactions.push(
    new Transaction("TRANSFER_OUT", amount, new Date(), receiver.id),
  );

  receiver.transactions.push(
    new Transaction("TRANSFER_IN", amount, new Date(), sender.id),
  );

  return {
    fromWallet: sender,
    toWallet: receiver,
  };
}

  findById(walletId: string): Wallet {
  const wallet = this.wallets.get(walletId);

  if (!wallet) {
    throw new NotFoundException('Wallet not found');
  }

  return wallet;
}

}
