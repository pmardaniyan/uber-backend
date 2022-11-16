import { ArgsType, Field, InputType, PartialType } from "@nestjs/graphql";
import { createRestaurantDto } from "./create-restaurant.dto";


@InputType()
export class UpdateRestaurantInputType extends PartialType(createRestaurantDto){

}


@InputType()
export class updateRestaurantDto {

    @Field(type => Number)
    id: number;

    @Field(type => UpdateRestaurantInputType)
    data: UpdateRestaurantInputType
}