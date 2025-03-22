import { IProject } from '../../../../project-manager-api/src/domain/interfaces/project.interface';
import { IUser } from '../../../../project-manager-api/src/domain/interfaces/user.interface';

export class ITask {
  id: number;
  name: string;
  status: 'pending' | 'completed';
  project: IProject;
  user: IUser;
}
