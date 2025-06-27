import {Body, Controller, Get, Param, ParseIntPipe, Post} from "@nestjs/common";
import {DebtService} from "./debt.service";
import {DebtDTO} from "./dto/debt.dto";

@Controller('debt')
export class DebtController{
    constructor(private readonly debtService: DebtService) {}

    @Post('create')
    async createDebt(@Body() body: { creditorId: number, debtorId: number, date: Date} ) {
        return this.debtService.createDebt(body.creditorId, body.debtorId, body.date);
    }

    @Get('/creditor/:creditorId')
    async getUserCreditorDebts(@Param('creditorId', ParseIntPipe) creditorId: number): Promise<DebtDTO[]> {
        return this.debtService.getUserCreditorDebts(creditorId);
    }

    @Get('/debtor/:debtorId')
    async getUserDebtorDebts(@Param('debtorId', ParseIntPipe) debtorId: number): Promise<DebtDTO[]> {
        return this.debtService.getUserDebtorDebts(debtorId);
    }
}