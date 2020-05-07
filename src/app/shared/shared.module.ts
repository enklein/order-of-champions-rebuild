import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscordPlugComponent } from './components/discord-plug/discord-plug.component';



@NgModule({
  declarations: [DiscordPlugComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DiscordPlugComponent
  ]
})
export class SharedModule { }
