/**
 * Auth Controller
 */
import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-dto';
import { SignUpDto } from './dto/signup-dto';
import { User } from './schema/user.schema';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  /**
   * Signup Route
   * @param signupDto
   * @returns {Object}
   */
  @Post('/signup')
  signup(
    @Body() signupDto: SignUpDto,
  ): Promise<{ access_token: string; expires_in: string }> {
    return this.authService.signup(signupDto);
  }

  /**
   * Login Route
   * @param loginDto
   * @returns {Object}
   */
  @Post('/login')
  login(
    @Body() loginDto: LoginDto,
  ): Promise<{ access_token: string; expires_in: string }> {
    return this.authService.login(loginDto);
  }

  /**
   * Find User by ID Route
   * @param id
   * @returns {User}
   */

  @Get('/user/:id')
  async findUserById(
    // @Param('id', new ParseUUIDPipe()) id: string,
    @Param('id') id: string,
  ): Promise<User> {
    console.log('here controller', id);

    const user = await this.authService.findUserById(id);

    if (!user) {
      // Handle the case where the user is not found
      // You can throw an exception or return an appropriate response
    }

    return user;
  }
}
