import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonInputSearchComponent } from './pokemon-input-search/pokemon-input-search.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { PokemonService } from './services/pokemon.service';
import { environment } from 'src/environments/environment';
import { CapturedPokemonListComponent } from './captured-pokemon-list/captured-pokemon-list.component';

const config: SocketIoConfig = { url: environment.websocketsUrl, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    PokemonInputSearchComponent,
    PokemonCardComponent,
    CapturedPokemonListComponent
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
