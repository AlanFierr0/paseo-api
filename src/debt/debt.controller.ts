import {Body, Controller, Post} from "@nestjs/common";
import {DebtService} from "./debt.service";

@Controller('debt')
export class DebtController{
    constructor(private readonly debtService: DebtService) {} // Replace 'any' with the actual type of your debt service

    @Post('create')
    async createDebt(@Body() body: { creditorId: number, debtorId: number, date: Date} ) {
        return this.debtService.createDebt(body.creditorId, body.debtorId, body.date);
    }
}