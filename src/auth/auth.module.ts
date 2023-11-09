/**
 * Auth Module
 */
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { User, UserSchema } from './schema/user.schema';
import { JwtStrategy } from './Guards/jwt.strategy';
import { Shop, ShopSchema } from './schema/shop.schema';

@Module({
  imports: [
    // define jtw as strategy
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    // need config variable thats why using registerAsync()
    JwtModule.registerAsync({
      inject: [ConfigService], // to access config variable
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get<string>('JWT_SECRET'),
          signOptions: {
            expiresIn: config.get<string | number>('JWT_EXPIRES_IN'),
          },
        };
      },
    }),
    // import mongoose schemas
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: Shop.name,
        schema: ShopSchema,
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
