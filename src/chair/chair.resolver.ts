import { Query, Resolver } from '@nestjs/graphql';
import { Chair } from './entities/chair.entity';

@Resolver()
export class ChairResolver {
  @Query(() => Chair)
  getChair(): Chair {
    return {
      name: '',
      price: 100,
      color: '',
      isAvailable: false,
    };
  }
}
