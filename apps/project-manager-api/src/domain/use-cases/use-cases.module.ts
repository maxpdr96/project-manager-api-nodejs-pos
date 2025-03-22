import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { TasksUseModule } from '@tasks/domain/use-cases/tasks-use.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ProjectsModule, TasksUseModule, UsersModule],
  exports: [ProjectsModule, TasksUseModule, UsersModule],
})
export class UseCasesModule {}
