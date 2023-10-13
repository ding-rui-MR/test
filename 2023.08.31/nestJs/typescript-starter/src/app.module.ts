import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { StudentsController } from './controller/students.controller';
import { StudentsService } from './service/students.service';
import { StudentsModule } from './module/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    StudentsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'school',
      autoLoadEntities: true,
      synchronize: true, // 数据库自动同步 entity 文件修改
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
