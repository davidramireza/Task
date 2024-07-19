import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { ProjectsService } from 'src/Service/projects.service';
import { CreateProjectDto } from 'src/DTO/create-project.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  // Add other endpoints as needed (GET, PUT, DELETE)
}