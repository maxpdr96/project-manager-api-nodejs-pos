import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { IUsersRepository } from '@project-manager-api/domain/repositories/users-repository.interface';
import { IUser } from '@project-manager-api/domain/interfaces/user.interface';

@Injectable()
export class UsersRepositoryService implements IUsersRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async findById(id: number): Promise<IUser | null> {
    return this.repository.findOneBy({ id });
  }

  async add(payload: DeepPartial<IUser>): Promise<IUser> {
    return this.repository.save(payload);
  }

  async findByEmail(email: string): Promise<IUser | null> {
    return this.repository.findOneBy({ email });
  }
}
