import { Module } from '@nestjs/common';
import { SensitiveController } from 'src/controller/sensitive.controller';
import { SensitiveService } from 'src/service/sensitive.service';

@Module({
    imports:[],
    providers:[SensitiveService],
    controllers:[SensitiveController]
})
export class SensitiveModule {}
