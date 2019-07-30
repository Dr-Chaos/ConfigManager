# Introduction

An easy to use package for manage json settings file

# Usage:

## Installation

1. Install config-manager

```
yarn add "@lovely.sh/config-manager"
```

2. Use config-manager in your application

```
const cfg = require('../dist/main');
```

## Demo

See demo folder

## Functions

Create and load config file:

```
const settings = cfg.createAndLoad(configPath);
```

Create config file:

```
cfg.create(filePath));
```

Load config file:

```
const settings = cfg.load(configPath);
```

Write in config file:

```
cfg.save(configPath, settings);
```

Check if config file exist:

```
 if (cfg.exist(configPath)) {
  // code
}
```
