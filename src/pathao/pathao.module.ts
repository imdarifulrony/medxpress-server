import { Module } from '@nestjs/common';
import { PathaoController } from './pathao.controller';
import { PathaoService } from './pathao.service';

@Module({
  controllers: [PathaoController],
  providers: [PathaoService],
  exports: [PathaoService]
})
export class PathaoModule {}
