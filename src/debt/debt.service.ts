import {DebtRepository} from "./debt.repository";
import {BadRequestException, Injectable, NotFoundException} from "@nestjs/common";
import {UserRepository} from "../user/user.repository";
import {DebtDTO} from "./dto/debt.dto";

@Injectable()
export class DebtService {
    constructor(
        private readonly debtRepository: DebtRepository,
        private readonly userRepository: UserRepository
    ) {}

    async createDebt( creditorId: number, debtorId: number, date: Date ) {
      const creditorInput = await this.userRepository.getUserById(creditorId);
      const debtorInput = await this.userRepository.getUserById(debtorId);
        if (!creditorInput || !debtorInput) {
            throw new NotFoundException('Creditor or Debtor not found');
        }
        if (debtorId === creditorId) {
            throw new BadRequestException('Debtor and Creditor cannot be the same user');
        }
      const debt = await this.debtRepository.createDebt(creditorId, debtorId, date);
      const debtor = await this.userRepository.getUserById(debt.debtorId);
      const creditor = await this.userRepository.getUserById(debt.creditorId);
      const dateOdDebt = debt.date;
      return debtor?.name + " le debe a " + creditor?.name + " el dia " + dateOdDebt;
    }

    async getUserCreditorDebts(creditorId: number):Promise<DebtDTO[]> {
        const creditorInput = await this.userRepository.getUserById(creditorId);
        if (!creditorInput) {
            throw new NotFoundException('Creditor not found');
        }
        return this.debtRepository.getUserCreditorDebts(creditorId);
    }

    async getUserDebtorDebts(debtorId: number):Promise<DebtDTO[]> {
        const debtorInput = await this.userRepository.getUserById(debtorId);
        if (!debtorInput) {
            throw new NotFoundException('Debtor not found');
        }
        return this.debtRepository.getUserDebtorDebts(debtorId);
    }

    async settleDebt(id: number) {
        const debt = await this.debtRepository.getDebtById(id);
        if (!debt) {
            throw new NotFoundException('Debt not found');
        }
        return this.debtRepository.settleDebt(id);
    }
}