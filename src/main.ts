import { ModCallback } from "isaac-typescript-definitions";

const MOD_NAME = "alwaysxl";

main();

function SetXl() {

}

function main() {
  // Instantiate a new mod object, which grants the ability to add callback functions that
  // correspond to in-game events.
  const mod = RegisterMod(MOD_NAME, 1);

  // Register a callback function that corresponds to when a new run is started.
  mod.AddCallback(ModCallback.POST_GAME_STARTED, postGameStarted);
  mod.AddCallback(ModCallback.POST_CURSE_EVAL, SetXl);

  // Print a message to the "log.txt" file.
  Isaac.DebugString(`${MOD_NAME} initialized.`);
}

function postGameStarted() {
  Isaac.DebugString("Callback fired: POST_GAME_STARTED");
}
