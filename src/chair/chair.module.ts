import { Module } from '@nestjs/common';
import { ChairResolver } from './chair.resolver';

@Module({
  providers: [ChairResolver],
})
export class ChairModule {}
