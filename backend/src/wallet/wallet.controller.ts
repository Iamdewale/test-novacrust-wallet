import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpCode,
} from "@nestjs/common";
import { WalletService } from "./wallet.service";
import { CreateWalletDto } from "./dto/create-wallet.dto";
import { FundWalletDto } from "./dto/fund-wallet.dto";
import { TransferDto } from "./dto/transfer.dto";


@Controller("wallets")
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

@Post()
create(@Body() dto: CreateWalletDto) {
  const currency = dto.currency?.toUpperCase() ?? "USD";
  return this.walletService.create(currency);
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
      dto.amount,
    );
  }

  @Get(":id")
  getWallet(@Param("id") id: string) {
    return this.walletService.findById(id);
  }
}
