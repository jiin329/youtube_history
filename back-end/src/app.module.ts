import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [AuthModule,
    ConfigModule.forRoot()
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: process.env.DB_HOST,
    //   username: process.env.DB_USERNAME,
    //   password: process.env.DB_PASSWORD,
    //   database: process.env.DB_DATABASE,
    //   entities: [User],
    //   synchronize: true
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
