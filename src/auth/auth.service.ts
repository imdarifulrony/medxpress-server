import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import mongoose, { Model } from 'mongoose';
import { SignUpDto } from './dto/signup-dto';
import { User } from './schema/user.schema';
import { LoginDto } from './dto/login-dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  /**
   * This is a signup function
   * @param
   * @param
   */
  async signup(signupDto: SignUpDto): Promise<{ token: string }> {
    // extract data
    const { name, email, password, phoneNumber, address } = signupDto;

    // hash password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // check user exists on the db or not

    //  write some code

    // create new user in db
    const user = await this.userModel.create({
      name,
      email,
      phoneNumber,
      password: hashedPassword,
      address,
    });

    // assign jwt to user
    const token = this.jwtService.sign({
      id: user._id,
    });

    // return the token to client
    return { token };
  }

  async login(loginDto: LoginDto): Promise<{ token: string }> {
    // extract data
    const { email, password } = loginDto;

    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password!');
    }

    const passwordMatched = await bcrypt.compare(password, user.password);

    if (!passwordMatched) {
      throw new UnauthorizedException('Invalid email or password!');
    }

    // assign jwt to user
    const token = this.jwtService.sign({
      id: user._id,
    });

    // return the token to client
    return { token };
  }
}
