import { Module } from '@nestjs/common';
import { ProjectsRepositoryService } from './repositories/projects.repository.service';
import { UsersRepositoryService } from './repositories/users.repository.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { ProjectEntity } from './entities/project.entity';
import { TaskEntity } from '@tasks/infrastructure/database/entities/task.entity';
import { TasksRepositoryService } from '@tasks/infrastructure/database/repositories/tasks.repository.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, ProjectEntity, TaskEntity]),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql.sqlite',
      entities: [__dirname + 'dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  providers: [
    ProjectsRepositoryService,
    UsersRepositoryService,
    TasksRepositoryService,
  ],
  exports: [
    ProjectsRepositoryService,
    UsersRepositoryService,
    TasksRepositoryService,
  ],
})
export class DatabaseModule {}
