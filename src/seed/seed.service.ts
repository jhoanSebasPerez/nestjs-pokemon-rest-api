import { Injectable } from '@nestjs/common';
import { PokemonResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly axios: AxiosAdapter
  ) { }

  async executeSeed() {
    await this.pokemonModel.deleteMany({});
    const data = await this.axios.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon?limit=151');

    const pokemosToInsert: { name: string, idNumber: number }[] = [];
    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const idNumber = +segments[segments.length - 2];
      pokemosToInsert.push({ name, idNumber });
    })

    await this.pokemonModel.insertMany(pokemosToInsert);

    return "Seed executed successfully";
  }
}
