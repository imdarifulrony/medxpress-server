/**
 * Auth Service
 */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { LoginDto } from './dto/login-dto';
import { SignUpDto } from './dto/signup-dto';
import { User } from './schema/user.schema';

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
  async signup(
    signupDto: SignUpDto,
  ): Promise<{ access_token: string; expires_in: string }> {
    // extract data
    const { firstName, lastName, postalCode, email, password, address, role } =
      signupDto;

    // hash password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // check user exists on the db or not

    //  write some code

    // create new user in db
    const user = await this.userModel.create({
      firstName,
      lastName,
      postalCode,
      email,
      password: hashedPassword,
      address,
      role,
    });

    // assign jwt to user
    const access_token = this.jwtService.sign({
      id: user._id,
    });

    const expires_in = process.env.JWT_EXPIRES_IN;

    // return the token to client
    return { access_token, expires_in };
  }

  async login(
    loginDto: LoginDto,
  ): Promise<{ access_token: string; expires_in: string }> {
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
    const access_token = this.jwtService.sign({
      id: user._id,
    });

    const expires_in = process.env.JWT_EXPIRES_IN;

    // return the token to client
    return { access_token, expires_in };
  }

  async findUserById(id: string): Promise<User | null> {
    try {
      console.log('id', id);

      // Use the Mongoose Model to find the user by ID
      const user = await this.userModel.findById(id).exec();
      return user;
    } catch (error) {
      // Handle any potential errors (e.g., database connection issues)
      throw new UnauthorizedException('User not found');
    }
  }
}
