import { ImmoPlayer } from "./base";
import { Game } from 'fivem-js';
// import {ESX} from "./esx";

/* setImmediate(() => {
  emitNet('helloserver');
});

onNet('helloclient', message => {
  console.log(`The server replied: ${message}`);
  console.log(ESX.GetPlayerData());
}); */

let player: ImmoPlayer;

on('onClientResourceStart', (resourceName:string) => {
  if(resourceName != GetCurrentResourceName()) return;
  player = new ImmoPlayer(Game.PlayerPed.Handle);
})

on('esx:setJob', () => {
  player.fetchJobs();
})
