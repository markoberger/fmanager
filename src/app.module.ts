import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PunishmentsModule } from './punishments/punishments.module';
import { PromisesModule } from './promises/promises.module';
import { RewardsModule } from './rewards/rewards.module';
import { TasksModule } from './tasks/tasks.module';
import { EventsModule } from './events/events.module';
import { MembersModule } from './members/members.module';

@Module({
  imports: [PunishmentsModule, PromisesModule, RewardsModule, TasksModule, EventsModule, MembersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
