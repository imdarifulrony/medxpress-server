/**
 * JWT Strategy
 */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from '../schema/user.schema';
import { Model } from 'mongoose';
import { Shop } from '../schema/shop.schema';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    @InjectModel(Shop.name) private readonly shopModel: Model<Shop>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any) {
    const { id } = payload;

    const user = await this.userModel.findById(id);
    const shopUser = await this.shopModel.findById(id);

    if (!user) {
      if (!shopUser) {
        throw new UnauthorizedException(
          'Please login to access this endpoint.',
        );
      }
    }

    if (user) {
      return user;
    }

    if (shopUser) {
      return shopUser;
    }
  }
}
