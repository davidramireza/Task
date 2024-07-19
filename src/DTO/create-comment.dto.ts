import { IsString, IsUUID } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  content: string;

  @IsUUID()
  task_id: string;

  @IsUUID()
  user_id: string;
}