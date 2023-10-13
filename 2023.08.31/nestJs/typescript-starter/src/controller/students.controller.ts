import { 
    Body,
    Controller,
    Get,
    Post,
    Query,
    ParseIntPipe,
 } from '@nestjs/common';
import { StudentsService } from '../service/students.service';
import { StudentDto } from 'src/dto/student.dto';
import { User } from 'src/common/decorators';
import { Student } from 'src/entity/student.entity';
import { ClassesDto } from 'src/dto/classes.dto';
import {  UseGuards  /** ... **/} from '@nestjs/common';
import { UserGuard } from '../common/guards/user.guard';




@Controller('s')
export class StudentsController {

    constructor(private readonly studentsService:StudentsService){}

    @Get('who-are-you')
    whoAreYou(@Query('name') name:string):string{
        return this.studentsService.ImStudent(name);
    }

    @UseGuards(UserGuard)
    @Post('who-are-you')
    whoAreYouPost(@Body('name') name:string):string{
        return this.studentsService.ImStudent(name);
    }
    
    @Post('studentDto')
    studentDto(@Body() studentDto:StudentDto):string{
        return this.studentsService.printStudent(studentDto);
    }

    @Post('who-is-request')
    whoIsReq(@User() user: string) {
        return user+"88888";
    }

    @Get('get-name-by-id')
    getNameById(@Query('id', ParseIntPipe) id: number) {
        return this.studentsService.getStudentName(id);
    }

    @Post('set-student-name')
    setStudentName(@User() user: string) {
        return this.studentsService.setStudent(user);
    }

    @Get('get-class')
    getClass(@Query('id', ParseIntPipe) id: number) {
        return this.studentsService.findClass(id);
    }

    @Post('set-class')
    setClass(@Body() classes: ClassesDto) {
        return this.studentsService.setClass(classes.className, classes.students);
    }


}
