import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { TaskEntity } from '@tasks/infrastructure/database/entities/task.entity';
import { ITask } from '@tasks/domain/interfaces/task.interface';
import { ITasksRepository } from '@tasks/domain/repositories/tasks-repository.interface';

@Injectable()
export class TasksRepositoryService implements ITasksRepository {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly repository: Repository<TaskEntity>,
  ) {}

  findAll(userId: number): Promise<ITask[]> {
    return this.repository.findBy({ user: { id: userId } });
  }

  findById(id: number): Promise<ITask | null> {
    return this.repository.findOneBy({ id });
  }

  add(payload: DeepPartial<ITask>): Promise<ITask> {
    return this.repository.save(payload) as Promise<ITask>;
  }

  updateById(payload: DeepPartial<ITask>) {
    return this.repository.update(payload.id as number, payload);
  }
}
