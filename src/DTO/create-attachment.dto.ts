import { IsString, IsUUID } from 'class-validator';

export class CreateAttachmentDto {
  @IsString()
  file_name: string;

  @IsString()
  file_path: string;

  @IsString()
  file_type: string;

  @IsUUID()
  task_id: string;

  @IsUUID()
  uploaded_by: string;
}