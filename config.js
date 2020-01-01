// you need to create a variables.js file in the root directory
// put sensitive information there NOT here

const variables = require('./variables')

const config = {
  "bridge": {
    "name": "Homebridge",
    "username": "CC:22:3D:E3:CE:30",
    "port": 51826,
    "pin": "031-45-154"
  },
  
  "description": "This is an example configuration file with one fake accessory and one fake platform. You can use this as a template for creating your own configuration file containing devices you actually own.",
  "ports": {
    "start": 52100,
    "end": 52150,
    "comment": "This section is used to control the range of ports that separate accessory (like camera or television) should be bind to."
  },
  "accessories": [
    {
      "accessory": "WeMo",
      "name": "Coffee Maker",
      "key": variables.WeMo.key,
      "locationGeo": variables.WeMo.locationGeo
    },
  ],

  "platforms": [
    {
      "platform" : "PhilipsHue",
      "name" : "Hue",
      "email": variables.PhilipsHue.email,
      "password": variables.PhilipsHue.password
    }
  ]
}

module.exports = config