"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const wallet_entity_1 = require("./entities/wallet.entity");
let WalletService = class WalletService {
    constructor() {
        this.wallets = new Map();
    }
    create(currency) {
        const wallet = new wallet_entity_1.Wallet((0, crypto_1.randomUUID)(), currency, 0);
        this.wallets.set(wallet.id, wallet);
        return wallet;
    }
    fund(walletId, amount) {
        const wallet = this.wallets.get(walletId);
        if (!wallet) {
            throw new common_1.NotFoundException('Wallet not found');
        }
        wallet.balance += amount;
        return wallet;
    }
    transfer(fromId, toId, amount) {
        if (fromId === toId) {
            throw new common_1.BadRequestException('Cannot transfer to the same wallet');
        }
        const sender = this.wallets.get(fromId);
        const receiver = this.wallets.get(toId);
        if (!sender) {
            throw new common_1.NotFoundException('Sender wallet not found');
        }
        if (!receiver) {
            throw new common_1.NotFoundException('Receiver wallet not found');
        }
        if (sender.balance < amount) {
            throw new common_1.BadRequestException('Insufficient balance');
        }
        sender.balance -= amount;
        receiver.balance += amount;
        return {
            fromWallet: sender,
            toWallet: receiver,
        };
    }
};
exports.WalletService = WalletService;
exports.WalletService = WalletService = __decorate([
    (0, common_1.Injectable)()
], WalletService);
