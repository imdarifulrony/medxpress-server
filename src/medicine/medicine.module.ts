import { Module } from '@nestjs/common';
import { MedicineService } from './medicine.service';
import { MedicineController } from './medicine.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Medicine, MedicineSchema } from './schema/medicine.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([
      { name: Medicine.name, schema: MedicineSchema },
    ]),
  ],
  providers: [MedicineService],
  controllers: [MedicineController],
})
export class MedicineModule {}
