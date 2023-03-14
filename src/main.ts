import { LevelCurse, ModCallback } from "isaac-typescript-definitions";
import { bitFlags } from "isaacscript-common";
import { printConsole } from "isaacscript-common/dist/src/functions/utils";

const MOD_NAME = "alwaysxl";
let stop = 0

main();

// function SetXl() {
//   let level = Game().GetLevel()
//   printConsole(`coucou`)
//   if(level.GetAbsoluteStage() == 1){
//     let curse = level.GetCurses()
//     if(curse !== 2){
//       // level.AddCurse(LevelCurse.LABYRINTH, true)
//       printConsole(`curse ${level.GetCurses()}`)
//       // return LevelCurse.LABYRINTH
//       return bitFlags(LevelCurse.LABYRINTH)
//     }
//     return bitFlags(LevelCurse.LABYRINTH)
//   }
//   return bitFlags(LevelCurse.LABYRINTH)
// }
function SetXl() {
  let level = Game().GetLevel()
  if(stop <= 25){
    stop++
    Game().GetLevel().CanStageHaveCurseOfLabyrinth(1)
    level.AddCurse(bitFlags(LevelCurse.LABYRINTH), true)
    printConsole(`${Game().GetLevel().GetStageType()}`)
  }else{
    return
  }
}


function main() {
  // Instantiate a new mod object, which grants the ability to add callback functions that
  // correspond to in-game events.
  const mod = RegisterMod(MOD_NAME, 1);

  // Register a callback function that corresponds to when a new run is started.
  mod.AddCallback(ModCallback.POST_GAME_STARTED, postGameStarted);
  mod.AddCallback(ModCallback.POST_PLAYER_INIT, SetXl);

  // Print a message to the "log.txt" file.
  Isaac.DebugString(`${MOD_NAME} initialized.`);
}

function postGameStarted() {
  Isaac.DebugString("Callback fired: POST_GAME_STARTED");
}
