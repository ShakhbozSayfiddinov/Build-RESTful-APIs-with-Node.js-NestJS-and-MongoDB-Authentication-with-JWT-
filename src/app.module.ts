import { Module, Logger , OnApplicationBootstrap} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import {join} from 'path'
import { OrderModule } from './order/order.module';
import { error } from 'console';





@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.NODE_ENV === 'test'
      ? process.env.MONGODB_URI_TEST
      : process.env.MONGODB_URI
    ),
    SharedModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", 'files')
    }),
    AuthModule,
    ProductModule,
    OrderModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnApplicationBootstrap {
  private readonly logger = new Logger(AppModule.name);

  async onApplicationBootstrap() {
    try {
      this.logger.log('Application has started successfully');
    } catch (error) {
      this.logger.error('Failed to start application', error.message);
    }
  }
}
