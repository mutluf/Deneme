import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserFilterDto } from './dto/get-user-filter.dto';
import { User } from './user.entity';
import { Role } from './user-role-enum';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
    constructor(
        private readonly userRepository: UserRepository) { }

    getAll(): Promise<User[]> {
        return this.userRepository.getAll();
    }

    getUsers(filter: GetUserFilterDto): Promise<User[]> {
        return this.userRepository.getUsers(filter);
    }

    async getById(id: number): Promise<User> {
        const found = await this.userRepository.findOneBy({ id: id });

        if (!found) {
            throw new NotFoundException(`User with ID "${id}" not found`)
        }

        return found;
    }

    async getByUsername(username: string): Promise<User> {
        const found = await this.userRepository.findOneBy({ username: username });

        if (!found) {
            throw new NotFoundException(`User with ID "${username}" not found`)
        }

        return found;
    }

    async create(userDto: CreateUserDto): Promise<User> {

        const user = this.userRepository.createUser(userDto);

        return user;
    }

    async delete(id: number): Promise<void> {
        const result = await this.userRepository.delete(id);

        if (result.affected === 0) {
            throw new NotFoundException(`User with ID "${id}" not found`)
        }
    }

    async updateUserRole(id: number, role: Role): Promise<User> {
        const user = await this.getById(id);
        user.role = role;

        await user.save();
        return user;
    }
}

//bu da çalışıyor
// @InjectRepository(UserRepository)
// private userRepository: UserRepository,