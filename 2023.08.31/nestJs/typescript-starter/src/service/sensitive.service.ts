// src/sensitive/sensitive.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sensitive } from 'src/entity/sensitive.entity';
import { SensitiveType } from 'src/entity/constants';

@Injectable()
export class SensitiveService {
    constructor(
        @InjectRepository(Sensitive)
        private readonly sensitiveRepository: Repository<Sensitive>,
    ) {}

    async setSensitive(type: SensitiveType, pathname: string, parameters: any, results: any) {
        return await this.sensitiveRepository.save({
            type,
            pathname,
            parameters,
            results,
        }).catch(e => e);
    }

    async getSensitive(type: SensitiveType) {
        return await this.sensitiveRepository.find({ 
            where: {
                type,
            }
        });
    }
}
