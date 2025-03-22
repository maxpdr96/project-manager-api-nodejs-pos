import { Module } from '@nestjs/common';
import { GetAllTasksService } from '@tasks/domain/use-cases/get-all-tasks.service';
import { GetTaskByIdService } from '@tasks/domain/use-cases/get-task-by-id.service';
import { CreateTaskService } from '@tasks/domain/use-cases/create-task.service';
import { UpdateTaskService } from '@tasks/domain/use-cases/update-task.service';
import { DatabaseModule } from '@project-manager-api/infrastructure/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    GetAllTasksService,
    GetTaskByIdService,
    CreateTaskService,
    UpdateTaskService,
  ],
  exports: [
    GetAllTasksService,
    GetTaskByIdService,
    CreateTaskService,
    UpdateTaskService,
  ],
})
export class TasksUseModule {}
