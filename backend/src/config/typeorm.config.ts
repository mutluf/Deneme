import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "src/users/user.entity";

export const typeOrmConfig : TypeOrmModuleOptions={
    type: 'postgres',
    host: 'localhost',
    port: 5434,
    username: 'postgres',
    password: 'admin1234',
    database: 'utrust',
    entities: [User],
    synchronize: true,
}

//entities: [__dirname + '/../**/*.entity.ts'],
//entities: [User] diğeri yerine bunu yazınca veri tabanında user tablosu oluştu