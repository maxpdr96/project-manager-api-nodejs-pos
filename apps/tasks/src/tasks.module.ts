import { Module } from '@nestjs/common';
import { GetAllTasksService } from './domain/use-cases/get-all-tasks.service';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from '@tasks/infrastructure/database/entities/task.entity';
import { TasksRepositoryService } from './infrastructure/database/repositories/tasks.repository.service';
import { TasksController } from './tasks.controller';
import { GetTaskByIdService } from './domain/use-cases/get-task-by-id.service';
import { CreateTaskService } from './domain/use-cases/create-task.service';
import { DomainModule } from './domain/domain.module';
import { GatewaysModule } from './gateways/gateways.module';
import { UsersRepositoryService } from '@project-manager-api/infrastructure/database/repositories/users.repository.service';
import { ProjectsRepositoryService } from '@project-manager-api/infrastructure/database/repositories/projects.repository.service';
import { TasksService } from './tasks.service';

@Module({
  imports: [InfrastructureModule, DomainModule, GatewaysModule],
  controllers: [TasksController],
  providers: [
    GetAllTasksService,
    GetTaskByIdService,
    CreateTaskService,
    TasksRepositoryService,
    UsersRepositoryService,
    TasksService,
    ProjectsRepositoryService,
  ],
  exports: [GetAllTasksService, GetTaskByIdService, CreateTaskService],
})
export class TasksModule {}
