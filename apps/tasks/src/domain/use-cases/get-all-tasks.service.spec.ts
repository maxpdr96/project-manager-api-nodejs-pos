import { Test, TestingModule } from '@nestjs/testing';
import { GetAllTasksService } from './get-all-tasks.service';
import { TasksRepositoryService } from '@tasks/infrastructure/database/repositories/tasks.repository.service';
import { UsersRepositoryService } from '@project-manager-api/infrastructure/database/repositories/users.repository.service';

describe('GetAllTasksService', () => {
  let service: GetAllTasksService;
  let tasksRepositoryMock: Partial<TasksRepositoryService>;
  let usersRepositoryMock: Partial<UsersRepositoryService>;

  beforeEach(async () => {
    // Crie mocks para as dependências
    tasksRepositoryMock = {
      findAll: jest.fn().mockResolvedValue([]),
    };

    usersRepositoryMock = {
      findById: jest.fn().mockResolvedValue({ id: 1, name: 'Test User' }),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetAllTasksService,
        { provide: TasksRepositoryService, useValue: tasksRepositoryMock },
        { provide: UsersRepositoryService, useValue: usersRepositoryMock },
      ],
    }).compile();

    service = module.get<GetAllTasksService>(GetAllTasksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
