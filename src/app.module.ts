import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Route1Controller } from './controllers/route1.controller';
import { Route2Controller } from './controllers/route2.controller';

@Module({
  imports: [],
controllers: [AppController, Route1Controller, Route2Controller],
  providers: [AppService],
})
export class AppModule {}
