# THICKER

## Description

THICKER is a set of typescript utils wrapped inside a nice little package.

## Overview
![THICKER](https://media.giphy.com/media/Gxrr0useOt368/source.gif)

### Directory structure 
```bash
.
├── lib
│   ├── geometry_utils
│   │   └── geometry_module.ts
│   ├── index.ts
│   ├── random_utils
│   │   └── random_module.ts
│   └── recursion_utils
│       └── recursion_module.ts
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
├── tests
│   └── library.test.ts
├── tsconfig.json
└── tslint.json
```

### How to build the library to be used in production-ready projects?

:warning: not yet but surely later later :warning:

```npm install thicker```

### How to use?

```typescript
import * as Thicker from 'thicker'

// will return a random float between 0 and 100 
const randomPoint = Thicker.rand.randomFloat(0,100)

```
### Features

TBA

## NPM custom commands

- `build`: Build the JavaScript files. 
- `build:watch`: Build the JavaScript files in watch mode. 
- `test`: Run jest in test mode.
- `test:watch`: Run jest in interactive test mode.
- `docs`: Generate the docs directory.
- `lint`: Runs linter on the whole project.


## Other/Optional considerations

TBA

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

*Bastien GUIHARD*