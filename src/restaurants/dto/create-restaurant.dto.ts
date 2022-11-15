import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class createRestaurantDto {
  @Field((type) => String)
  name: string;
  @Field((type) => Boolean)
  isVeagan: boolean;
  @Field((type) => String)
  address: string;
  @Field((type) => String)
  ownerName: string;
}
