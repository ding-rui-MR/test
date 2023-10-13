import { Injectable,Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentDto } from 'src/dto/student.dto';
import { Classes } from 'src/entity/class.entity';
import { Student } from 'src/entity/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService {
    private readonly logger = new Logger(StudentsService.name);
    constructor(
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>,
        @InjectRepository(Classes)
        private readonly classRepository:Repository<Classes>,
    ) {}
    
    ImStudentNoName() {
        return 'Im student';
    }
    ImStudent1(name:string) {
        return 'Im student\n    '+name;
    }    
    ImStudent(student:StudentDto) {
        return 'Im student\n    '+student.name+'\n'+student.age;
    }    
    printStudent(studentDto:StudentDto) {
        return 'Im student'+'888888/n'+studentDto.age;
    }

    async getStudentName(id: number) {
        this.logger.log(`get student id is ${id}`);
        const results = await this.studentRepository.find({ where: { id } });
        return results ?? 'not found';
    }

    async setStudent(name: string) {
        const results = this.studentRepository.save({ name });
        return results;
    }

    async setClass(name: string, studentIds:number[]) {
        // let items:Student[];
        // const itemList = studentIds.map((id:number)=>{
        //     return this.studentRepository.findOne({ where: { id } })
        // })
        // items = await Promise.all(itemList);
        const students = await this.studentRepository.findByIds(studentIds);
        const result = await this.classRepository.save({
            className: name,
            students: students, // 此处直接保存students 的实例，即直接从数据库取出来的数据
        })
        return result;
    }
    async findClass(id: number) {
        const result = await this.classRepository.find({
            where: { id },
            relations: ['students']
        });
        return result;
    }

}
