import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsController } from 'src/controller/students.controller';
import { Classes } from 'src/entity/class.entity';
import { Student } from 'src/entity/student.entity';
import { StudentsService } from 'src/service/students.service';


@Module({
    imports:[TypeOrmModule.forFeature([Student,Classes])],
    providers:[StudentsService,Student,Classes],
    controllers:[StudentsController]
})
export class StudentsModule {}
