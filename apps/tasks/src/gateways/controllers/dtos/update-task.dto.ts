import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from '@tasks/gateways/controllers/dtos/create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  id: number;
}
