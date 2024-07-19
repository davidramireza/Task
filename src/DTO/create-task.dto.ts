import { IsString, IsUUID, IsOptional, IsDate, IsEnum } from 'class-validator';

enum TaskStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
}

enum TaskPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(TaskStatus)
  status: TaskStatus;

  @IsEnum(TaskPriority)
  priority: TaskPriority;

  @IsDate()
  @IsOptional()
  due_date?: Date;

  @IsUUID()
  project_id: string;

  @IsUUID()
  @IsOptional()
  assigned_to?: string;

  @IsUUID()
  created_by: string;
}