import {PrismaService} from "../prisma/prisma.service";
import { Inject } from "@nestjs/common";
import {DebtDTO} from "./dto/debt.dto";

export class DebtRepository{
    constructor(@Inject(PrismaService) private readonly db: PrismaService) {}

    async createDebt(creditorId: number, debtorId: number, date: Date): Promise<DebtDTO> {
        return this.db.debts.create({
            data: {
                creditorId,
                debtorId,
                date,
            },
        });
    }

    async getUserCreditorDebts(creditorId: number): Promise<DebtDTO[]> {
        return this.db.debts.findMany({
            where: { creditorId },
        });
    }

    async getUserDebtorDebts(debtorId: number): Promise<DebtDTO[]> {
        return this.db.debts.findMany({
            where: { debtorId },
        });
    }
}