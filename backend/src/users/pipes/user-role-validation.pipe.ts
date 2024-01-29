// CUSTOM VALIDATIPN PIPES
import { BadRequestException, PipeTransform } from "@nestjs/common";
import { Role } from "../user-role-enum";

export class UserRoleValidationPipe implements PipeTransform {

    readonly allowedRoles = [
        Role.ADMIN,
        Role.SUPER_ADMIN,
        Role.USER
    ];

    transform(value: any) {
        value = value.toUpperCase();

        if (!this.isRoleValid(value)) {
            throw new BadRequestException(`"${value}" is an invalid role`);
        }
        return value;
    }

    private isRoleValid(role: any) {
        const index = this.allowedRoles.indexOf(role);
        return index !== -1;
    }
}