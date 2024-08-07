import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EnvConfig } from './config/app.config';
import { JoiValidationSchema } from './config/joi.schema';

@Module({

  imports: [
    ConfigModule.forRoot({
      load: [EnvConfig],
      validationSchema: JoiValidationSchema
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      directConnection: true,
    }),
    PokemonModule,
    CommonModule,
    SeedModule],

})
export class AppModule { }
