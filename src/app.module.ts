import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import * as Joi from "joi";
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { Restaurant } from './restaurants/entities/restaurant.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.test',
      ignoreEnvFile : process.env.NODE_ENV === 'prod',
      validationSchema: Joi.object({
        NODE_ENV:Joi.string().valid('dev','prod'),
        DB_HOST : Joi.string(), 
        DB_PORT : Joi.string(),
        DB_USERNAME : Joi.string(),
        DB_PASSWORD : Joi.string(),
        DB_NAME : Joi.string(),
      })
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: 'postgres',
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Restaurant],
      synchronize: process.env.NODE_ENV !== 'prod',
      logging: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    RestaurantsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
