import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Chair {
  @Field(() => String)
  name: string;

  @Field(() => Number)
  price: number;

  @Field(() => String)
  color: string;

  @Field(() => Boolean)
  isAvailable: boolean;
}
