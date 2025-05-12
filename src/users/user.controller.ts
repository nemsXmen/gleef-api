import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/user.create.dto';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.usersService.user({
        id: +id,
    });
  }
  @Get()
  async findAll() {
    return this.usersService.users({
        skip: 0,
        take: 10,
        orderBy: {
            createdAt: 'desc',
        },
    });
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser({
        username: createUserDto.username,
        password: createUserDto.password,
    });
  }
}