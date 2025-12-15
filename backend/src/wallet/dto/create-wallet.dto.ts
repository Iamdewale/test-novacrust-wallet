import { IsIn } from 'class-validator';

export class CreateWalletDto {
  @IsIn(['USD', 'usd'])
  currency: string;
}
