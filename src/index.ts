import { autobattle } from "./scripts/autobattle";
import { autobreed } from "./scripts/autobreed";
import { autofarm } from "./scripts/autofarm";
import { autogym } from "./scripts/autogym";
import { automove } from "./scripts/automove";
import { OptionUI, ScriptUI } from "./ui";
import { patchPreload } from "./utils/monkey";

const scriptui = new ScriptUI();

scriptui.addOption(new OptionUI("Auto Battle", autobattle));
scriptui.addOption(new OptionUI("Auto Breed", autobreed));
scriptui.addOption(new OptionUI("Auto Farm", autofarm));
scriptui.addOption(new OptionUI("Auto Gym", autogym));
scriptui.addOption(new OptionUI("Auto Move Route", automove));

patchPreload().then(() => {
  autobattle.start();
  autobreed.start();
  autofarm.start();
  scriptui.init();
});
