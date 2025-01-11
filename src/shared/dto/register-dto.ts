import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class RegisterDTO {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @IsString()
    @IsNotEmpty()
    region: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()  // Malumot ixtiyoriy jo`natish bo`lgani uchun
    district: string
}