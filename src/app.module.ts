import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DebtModule } from './debt/debt.module';
import { WalkModule } from './walk/walk.module';

@Module({
  imports: [UserModule, DebtModule, WalkModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
