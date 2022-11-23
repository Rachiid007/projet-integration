import { UsersService } from 'src/users/users.service';
import { Controller, Get, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  async findByEmail(@Query() query: { email: string; password: string }) {
    return await this.usersService.loginUser(query.email, query.password);
  }

  @Post()
  async create(@Query() query: { email: string; password: string }) {
    return await this.usersService.create(query);
  }
}
