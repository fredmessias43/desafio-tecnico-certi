import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonInputSearchComponent } from './pokemon-input-search/pokemon-input-search.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { PokemonService } from './services/pokemon.service';

const config: SocketIoConfig = { url: 'ws://localhost:8080/', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    PokemonInputSearchComponent,
    PokemonCardComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
