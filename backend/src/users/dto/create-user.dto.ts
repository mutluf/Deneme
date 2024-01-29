import {IsNotEmpty} from 'class-validator'
export class CreateUserDto{
    @IsNotEmpty()
    fullname: string;
 
    @IsNotEmpty()
    username: string;
  
    @IsNotEmpty()
    password: string;
}