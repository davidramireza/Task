import { IsUUID, IsEnum } from 'class-validator';

enum ProjectRole {
  MEMBER = 'member',
  ADMIN = 'admin',
}

export class CreateProjectMemberDto {
  @IsUUID()
  project_id: string;

  @IsUUID()
  user_id: string;

  @IsEnum(ProjectRole)
  role: ProjectRole;
}