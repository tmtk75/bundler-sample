# README
bundler-sample, which is a simple TypeScript application so that you can try bundler tools.

Now two bundler tools are supported:
* rollup
* parcel


## Overview
This repository gives a simple project to demonstrate how to use bundler tools with TypeScript.


## Installation
To set up the project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd bundler-sample
corepack enable
pnpm install
```


## Bundle
### rollup
```bash
pnpm run build:rollup
```

### parcel
```bash
pnpm run build:parcel
```
Note: now this command crashes unfortunately with segmentation fault. It seems a parcel's glitch.


## Testing
Tests are written using vitest and are located in the `test` directory.
To run tests, use the script:
```bash
pnpm run test
```

