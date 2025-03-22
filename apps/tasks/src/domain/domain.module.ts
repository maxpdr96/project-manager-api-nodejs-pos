import { Module } from '@nestjs/common';
import { TasksUseModule } from '@tasks/domain/use-cases/tasks-use.module';
@Module({
  imports: [TasksUseModule],
  exports: [TasksUseModule],
})
export class DomainModule {}
