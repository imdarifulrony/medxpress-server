/**
 * @module AuthController
 * @description Controller for authentication-related routes.
 */
import {
  Body,
  ConflictException,
  Controller,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, ShopLoginDto } from './dto/login-dto';
import { SignUpDto } from './dto/signup-dto';
import { User } from './schema/user.schema';
import { CheckEmailDto } from './dto/check-email.dto';
import { Shop } from './schema/shop.schema';
import { CreateShopDto } from './dto/create-shop.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  /**
   * @description Signup Route
   * @param signupDto - The DTO for user signup.
   * @returns {Object} - An object containing an access token and expiration time.
   */
  @Post('/signup')
  signup(
    @Body() signupDto: SignUpDto,
  ): Promise<{ access_token: string; expires_in: string }> {
    return this.authService.signup(signupDto);
  }

  /**
   * @description Login Route
   * @param loginDto - The DTO for user login.
   * @returns {Object} - An object containing an access token and expiration time.
   */
  @Post('/login')
  login(
    @Body() loginDto: LoginDto,
  ): Promise<{ access_token: string; expires_in: string }> {
    return this.authService.login(loginDto);
  }

  /**
   * @description Find User by ID Route
   * @param id - The ID of the user to find.
   * @returns {User} - The user with the specified ID.
   */

  @Get('/user/:id')
  async findUserById(@Param('id') id: string): Promise<User> {
    try {
      const user = await this.authService.findUserById(id);

      if (!user) {
        throw new NotFoundException('User not found');
      }

      return user;
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve user');
    }
  }

  /**
   * @description Check Duplicate Email Route
   * @param checkEmailDto - The DTO for checking duplicate email.
   * @returns {Object} - An object indicating whether the email is a duplicate.
   */
  @Post('/check-email')
  async checkDuplicateEmail(
    @Body() checkEmailDto: CheckEmailDto,
  ): Promise<{ isDuplicate: boolean }> {
    const isDuplicate = await this.authService.checkDuplicateEmail(
      checkEmailDto.email,
    );

    if (isDuplicate) {
      throw new ConflictException('Email is already in use');
    }

    return { isDuplicate: false };
  }

  // ! SHOPS

  @Post('/register-shop')
  registerShop(
    @Body() createShopDto: CreateShopDto,
  ): Promise<{ access_token: string; expires_in: string }> {
    return this.authService.registerShop(createShopDto);
  }

  @Post('/login-shop')
  shopLogin(
    @Body() loginDto: ShopLoginDto,
  ): Promise<{ access_token: string; expires_in: string }> {
    return this.authService.shopLogin(loginDto);
  }

  @Get('/shops')
  getAllShops(): Promise<Shop[]> {
    return this.authService.getAllShops();
  }

  @Get('/shop/:id')
  getShopById(@Param('id') id: string): Promise<Shop> {
    return this.authService.getShopById(id);
  }
}
