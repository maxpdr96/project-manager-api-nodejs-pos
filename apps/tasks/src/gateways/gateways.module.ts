import { Module } from '@nestjs/common';
import { TasksController } from '@tasks/gateways/controllers/tasks.controller';
import { DomainModule } from '@tasks/domain/domain.module';

@Module({
  imports: [DomainModule],
  controllers: [TasksController],
})
export class GatewaysModule {}
