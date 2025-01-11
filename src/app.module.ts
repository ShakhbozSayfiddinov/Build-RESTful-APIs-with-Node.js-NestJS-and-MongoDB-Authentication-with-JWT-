import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import {join} from 'path'




@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    SharedModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", 'files')
    }),
    AuthModule,
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

