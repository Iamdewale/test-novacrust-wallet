import { IsUUID, IsNumber, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';

export class TransferDto {
  @IsUUID()
  fromWalletId: string;

  @IsUUID()
  toWalletId: string;

  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  amount: number;
}