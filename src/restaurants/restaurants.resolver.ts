
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { createRestaurantDto } from './dto/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';

@Resolver(of => Restaurant)
export class RestaurantResolver {
  @Query((restaurants) => [Restaurant])
  restaurants(): Restaurant[] {
    return [];
  }
  @Mutation(returns => Boolean)
  createRestaurant(
    @Args() createRestaurantDto:createRestaurantDto
  ) : Boolean
    
  {
        
    return true
  }
}






