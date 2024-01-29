// import { IsIn } from "class-validator";
// import { Role } from "../user.model"

import { IsNotEmpty, IsOptional } from "class-validator";

export class GetUserFilterDto{
    //i dont wanna use role filter but i want to see it below
    // @IsOptional()
    // @IsIn([Role.ADMIN, Role.SUPER_ADMIN, Role.USER])
    // role: Role;
    
    @IsOptional()
    @IsNotEmpty()
    search: string;
}