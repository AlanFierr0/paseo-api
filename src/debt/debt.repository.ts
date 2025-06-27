import {PrismaService} from "../prisma/prisma.service";
import {Inject} from "@nestjs/common";

export class DebtRepository{
    constructor(@Inject(PrismaService) private readonly db: PrismaService) {}
    async createDebt(creditorId: number, debtorId: number, date: Date) {
        return this.db.debts.create({
            data: {
                creditorId,
                debtorId,
                date,
            },
        });
    }
}