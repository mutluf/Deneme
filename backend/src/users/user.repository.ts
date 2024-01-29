import { DataSource, Repository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { Role } from "./user-role-enum";
import { GetUserFilterDto } from "./dto/get-user-filter.dto";
import { Injectable } from "@nestjs/common";


//aşağıdaki @Injectable decorator u, deprecated olmuş @EntityRepository yerine eklenerek aşağıdaki ilgili hata çözüldü.
//Error: Nest can't resolve dependencies of the UserService (?). 
//Please make sure that the argument UserRepository at index [0] is available in the UserModule context. #5372
@Injectable()
export class UserRepository extends Repository<User>{
    constructor(private dataSource: DataSource) {
        super(User, dataSource.createEntityManager());
    }

    async getAll(): Promise<User[]> {
        return this.find();
    }

    async getUsers(filter: GetUserFilterDto): Promise<User[]> {
        const { search } = filter;
        let query = this.createQueryBuilder('user');

        if (search) {
            query.andWhere(
                'user.fullname LIKE :search OR user.username LIKE :search',
                { search: `%${search}%` }
            );
        }
        const users = await query.getMany();
        return users;
    }

    async createUser(userDto: CreateUserDto): Promise<User> {
        const { fullname, username, password } = userDto;
        const user = new User();

        user.fullname = fullname;
        user.username = username;
        user.password = password;
        user.role = Role.USER;

        await user.save();

        return user;
    }
}