import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import {DebtModule} from "./debt/debt.module";

@Module({
  imports: [UserModule, DebtModule ],
  controllers: [],
  providers: [],
})
export class AppModule {}
