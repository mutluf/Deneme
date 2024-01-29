import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { User } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, UserRepository])
  ],
  exports:[UsersService],
  controllers: [UsersController],
  providers: [UsersService, UserRepository]
})
export class UsersModule {}

// imports: [
//   TypeOrmModule.forFeature([UserRepository,User])
// ], burada User vermek  aşağıdaki hatayı düzeltti
//[Nest] 14504  - 28.01.2024 11:46:05   ERROR [ExceptionHandler] Nest can't resolve dependencies of the UsersService (?). 
//Please make sure that the argument "UserRepository" at index [0] is available in the UsersModule context.
// Potential solutions:
// - Is UsersModule a valid NestJS module?
// - If "UserRepository" is a provider, is it part of the current UsersModule?
// - If "UserRepository" is exported from a separate @Module, is that module imported within UsersModule?
//   @Module({
//     imports: [ /* the Module containing "UserRepository" */ ]
//   })