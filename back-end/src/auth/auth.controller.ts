import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OAuth2Client } from 'google-auth-library';
import { AppService } from 'src/app.service';
import { AuthService } from './auth/auth.service';

const client = new OAuth2Client(process.env.clientID, process.env.clientSecret);
@Controller('auth')
export class AuthController {

  constructor(private readonly authService : AuthService){ }


  @Post('/login')
  async login( @Body('token') token) : Promise<any> {
    const resp = await client.verifyIdToken({
      idToken: token,
      audience: process.env.clientID
    })
    console.log(resp.getPayload());
    return {
      success: true
    };
  }

}
