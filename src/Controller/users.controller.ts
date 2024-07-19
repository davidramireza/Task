import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from '../Service/users.service';
import { User } from '../DB/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  // Agrega más endpoints según sea necesario
  
}