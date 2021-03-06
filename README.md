# THICKER

## Description

THICKER is a set of typescript utils wrapped inside a nice little package.

## Overview
![THICKER](https://media.giphy.com/media/Gxrr0useOt368/source.gif)

### Directory structure 
```bash
.
├── core
│   ├── browser
│   │   └── index.ts
│   ├── crypto
│   │   ├── index.ts
│   │   └── utils.ts
│   ├── geometry
│   │   └── index.ts
│   ├── random
│   │   └── index.ts
│   ├── recursion
│   │   └── index.ts
│   └── string
│       └── index.ts
├── errors
│   └── index.ts
├── index.ts
└── utils
    └── index.ts
```

### How to build the library to be used in production-ready projects?
```npm install thicker```

### How to use?
__Example:__

```typescript
import * as Thicker from 'thicker'

// will return a random float between 0 and 100 
const randomPoint = Thicker.Random.randomFloat(0,100)

```
### Features

__Random__:
* TBA

__Recursion__:
* TBA

__Geometry__:
* TBA

__String__:
* TBA

__Utils__:
* TBA

__Crypto__:
* TBA

## NPM custom commands

- `build`: Build the JavaScript files. 
- `build:watch`: Build the JavaScript files in watch mode. 
- `test`: Run jest in test mode.
- `test:watch`: Run jest in interactive test mode.
- `docs`: Generate the docs directory.
- `lint`: Runs linter on the whole project.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

*Bastien GUIHARD*
