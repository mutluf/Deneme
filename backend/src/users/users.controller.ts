import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRoleValidationPipe } from './pipes/user-role-validation.pipe';
import { User } from './user.entity';
import { Role } from './user-role-enum';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @Get()
    getAll(): Promise<User[]> {
        return this.userService.getAll();
    }

    @Get("/:id")
    getById(@Param('id', ParseIntPipe) id: number): Promise<User> {
        return this.userService.getById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() user: CreateUserDto): Promise<User> {
        return this.userService.create(user);
    }

    @Delete("/:id")
    delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.userService.delete(id);
    }

    @Patch("/:id/role")
    updateUserRole(
        @Param("id", ParseIntPipe) id: number,
        @Body("role", UserRoleValidationPipe) role: Role): Promise<User> {
        return this.userService.updateUserRole(id, role);
    }
}
