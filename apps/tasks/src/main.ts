import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { TasksModule } from './tasks.module';

async function bootstrap() {
  const app = await NestFactory.create(TasksModule);

  app.connectMicroservice(
    {
      transport: Transport.REDIS,
      options: {
        host: '192.168.3.25',
        port: 6379,
      },
    },
    {
      inheritAppConfig: true,
    },
  );

  await app.startAllMicroservices();
}
bootstrap();
