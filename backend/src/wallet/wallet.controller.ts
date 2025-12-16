import { Controller, Get, Post, Body, HttpCode } from "@nestjs/common";
import { WalletService } from "./wallet.service";
import { CreateWalletDto } from "./dto/create-wallet.dto";
import { Param } from "@nestjs/common";
import { FundWalletDto } from "./dto/fund-wallet.dto";
import { TransferDto } from "./dto/transfer.dto";

@Controller("wallets")
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Get()
  test() {
    return { ok: true };
  }

  @Post()
  create(@Body() dto: CreateWalletDto) {
    return this.walletService.create(dto.currency.toUpperCase() as "USD");
  }

  @Post(":id/fund")
  fund(@Param("id") id: string, @Body() dto: FundWalletDto) {
    return this.walletService.fund(id, dto.amount);
  }

  @Post("transfer")
  @HttpCode(200)
  transfer(@Body() dto: TransferDto) {
    return this.walletService.transfer(
      dto.fromWalletId,
      dto.toWalletId,
      dto.amount
    );
  }

  @Get(":id")
  getWallet(@Param("id") id: string) {
    return this.walletService.findById(id);
  }
}
