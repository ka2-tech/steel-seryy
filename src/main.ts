if (!process.env.IS_TS_NODE) {
    require('module-alias/register');
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Learn NestJS')
        .setDescription('The NestJS API description')
        .setVersion('1.0')
        .addTag('Van Mai Khai')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/swagger/api', app, document);

    await app.listen(3000);
}
bootstrap();
