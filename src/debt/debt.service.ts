import {DebtRepository} from "./debt.repository";
import {Injectable} from "@nestjs/common";

@Injectable()
export class DebtService {
    constructor(
        private readonly debtRepository: DebtRepository
    ) {}
  async createDebt( creditorId: number, debtorId: number, date: Date ) {
      return this.debtRepository.createDebt(creditorId, debtorId, date);
  }
}