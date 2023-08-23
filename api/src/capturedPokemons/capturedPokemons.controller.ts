import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CapturedPokemonsService } from './capturedPokemons.service';
import { CreateCapturedPokemonDto } from './dto/create-capturedPokemon.dto';
import { UpdateCapturedPokemonDto } from './dto/update-capturedPokemon.dto';

@Controller('captured_pokemons')
export class CapturedPokemonsController {
  constructor(private readonly capturedPokemonsService: CapturedPokemonsService) { }

  @Post()
  create(@Body() createCapturedPokemonDto: CreateCapturedPokemonDto) {
    return this.capturedPokemonsService.create(createCapturedPokemonDto);
  }

  @Get()
  findAll() {
    return this.capturedPokemonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.capturedPokemonsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCapturedPokemonDto: UpdateCapturedPokemonDto) {
    return this.capturedPokemonsService.update(id, updateCapturedPokemonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.capturedPokemonsService.remove(id);
  }
}
