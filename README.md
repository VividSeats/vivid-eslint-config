# eslint-config-vividseats


## Installation

```
yarn add @vividseats/eslint-config-vividseats --dev
```

or 

```
npm install @vividseats/eslint-config-vividseats --save-dev
```

## Usage

In your `.eslintrc`,

You can extend the vividseats base eslint config.

```
{
  "extends": [
    "@vividseats/eslint-config-vividseats"
  ],
  "env": {
    "node": true,
    "es6": true
  },
  "rules" : {
    "react/jsx-filename-extension": 0 // Override rules here
  }
}
```
