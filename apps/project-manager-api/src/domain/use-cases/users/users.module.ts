import { Module } from '@nestjs/common';
import { CreateUserService } from './create-user.service';
import { GetUserByIdService } from './get-user-by-id.service';
import { DatabaseModule } from '@project-manager-api/infrastructure/database/database.module';
import { GetUserByEmailService } from './get-user-by-email.service';
import { UsersRepositoryService } from '@project-manager-api/infrastructure/database/repositories/users.repository.service';
import { UserEntity } from '@project-manager-api/infrastructure/database/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([UserEntity])],
  providers: [
    CreateUserService,
    GetUserByIdService,
    GetUserByEmailService,
    UsersRepositoryService,
  ],
  exports: [
    CreateUserService,
    GetUserByIdService,
    GetUserByEmailService,
    UsersRepositoryService,
  ],
})
export class UsersModule {}
