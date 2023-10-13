import { IsNotEmpty,IsString,IsNumber } from "class-validator";


export class StudentDto{
    @IsNotEmpty()
    @IsString()
    name:string;
    
    @IsNotEmpty()
    @IsNumber()
    age:number;
}