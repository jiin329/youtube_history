import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth/auth.service';


@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
  ],
  imports: [
  ]
})
export class AuthModule {}
