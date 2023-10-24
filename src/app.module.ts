/**
 * App Module
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { MedicineModule } from './medicine/medicine.module';

@Module({
  imports: [
    // configure dot env
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    // Import Mongoose Modules
    MongooseModule.forRoot(process.env.MONGODB_URL),
    // Imports other modules
    AuthModule,
    MedicineModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
