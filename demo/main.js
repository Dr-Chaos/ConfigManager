const cfg = require('../dist/main');
const path = require('path');
const readlineSync = require('readline-sync');

main();

function main() {
  const configPath = path.join(__dirname, 'resources', 'settings.json');

  checkAndCreateConfig(configPath);

  const settings = cfg.load(configPath);

  console.log(`Hello ${settings.name}`);

  if (!settings.old) {
    settings.old = readlineSync.question('How old are you ? ');
  }

  console.log(settings);
  cfg.save(configPath, settings);
}

function checkAndCreateConfig(configPath) {
  if (!cfg.exist(configPath)) {
    console.log("Config don't exist");

    const settings = cfg.createAndLoad(configPath);

    settings.name = readlineSync.question('What is your name ? ');

    cfg.save(configPath, settings);
  }
}
