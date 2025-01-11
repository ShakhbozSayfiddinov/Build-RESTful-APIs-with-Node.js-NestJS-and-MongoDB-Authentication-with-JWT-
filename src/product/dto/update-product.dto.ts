import { IsNotEmpty,  IsNumberString, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class UpdateProductDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty()
    // @IsNotEmpty()
    image: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    price: string;

    @ApiProperty()
    @IsNumberString()
    @IsNotEmpty()
    amount: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    owner: string;
} 
