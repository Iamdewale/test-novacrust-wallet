import { Controller, Get, Post, Body } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { CreateWalletDto } from './dto/create-wallet.dto';

@Controller('wallets')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Get()
  test() {
    return { ok: true };
  }

  @Post()
  create(@Body() dto: CreateWalletDto) {
    return this.walletService.create(dto.currency.toUpperCase() as 'USD' );
  }
}
