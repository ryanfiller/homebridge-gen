# homebridge-gen

Clone this repository into your `.homebridge` directory.

Rename `variables.RENAME.js` to `variables.js`.
Store your sensitive info here, ex:
```
WeMo: {
  "key": "1234",
}
```

Access those variables in your `config.js` file, ex:
```
{
  "accessory": "WeMo",
  "name": "Coffee Maker",
  "key": variables.WeMo.key,
},
```

Run `npm run homebridge-gen` from the `homebridge-gen` to generate a `config.json` file one directory up, which should be `./homebridge`.

Run `npm run homebridge` to generate this file and start the homebridge server. Dependencies for homebridge are not manged through this script at all, follow the normal documentation process [here](https://www.npmjs.com/package/homebridge#installing-plugins).

`config.json` and `variables.js` are both included in `.gitignore`.
PLEASE DO NOT COMMIT YOUR USER NAMES, PASSWORDS, OR API KEYS TO GIT.