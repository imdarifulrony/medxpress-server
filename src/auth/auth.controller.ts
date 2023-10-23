/**
 * Auth Controller
 */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-dto';
import { SignUpDto } from './dto/signup-dto';

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
}
