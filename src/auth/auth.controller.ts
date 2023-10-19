import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { SignUpDto } from './dto/signup-dto';
import { LoginDto } from './dto/login-dto';
import { Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  /**
   * Signup Route
   * @param signupDto
   * @returns {Object}
   */
  @Post('/signup')
  signup(@Body() signupDto: SignUpDto): Promise<{ token: string }> {
    return this.authService.signup(signupDto);
  }

  /**
   * Login Route
   * @param loginDto
   * @returns {Object}
   */
  @Get('/login')
  login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
    return this.authService.login(loginDto);
  }
}
