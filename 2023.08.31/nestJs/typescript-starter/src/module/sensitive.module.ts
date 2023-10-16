import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensitiveController } from 'src/controller/sensitive.controller';
import { Sensitive } from 'src/entity/sensitive.entity';
import { SensitiveService } from 'src/service/sensitive.service';

@Module({
    imports:[TypeOrmModule.forFeature([Sensitive])],
    providers:[SensitiveService],
    controllers:[SensitiveController],
    exports: [SensitiveService],
})
export class SensitiveModule {}
