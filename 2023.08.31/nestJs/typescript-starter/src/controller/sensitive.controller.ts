// src/sensitive/sensitive.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { SensitiveType } from 'src/entity/constants';
import { SensitiveService } from 'src/service/sensitive.service';

@Controller('sensitive')
export class SensitiveController {
    constructor(private readonly sensitiveService: SensitiveService) {}

    @Get('/get-by-type')
    getSensitive(@Query('type') type: SensitiveType) {
        return this.sensitiveService.getSensitive(type);
    }
}

