# mongoose-timestamps

[![Dependency Status](https://david-dm.org/pdesterlich/moorea-mongoose-timestamps.svg?theme=shields.io)](https://david-dm.org/pdesterlich/moorea-mongoose-timestamps) [![devDependency Status](https://david-dm.org/pdesterlich/moorea-mongoose-timestamps/dev-status.svg?theme=shields.io)](https://david-dm.org/pdesterlich/moorea-mongoose-timestamps#info=devDependencies)

simple timestamps plugin for [Mongoose](http://mongoosejs.com/)

## Installation

`npm install moorea-mongoose-timestamps`

## Usage

```javascript
'use strict';

var
  mongoose   = require('mongoose'),
  timestamps = require('moorea-mongoose-timestamps');

var
  kittySchema = mongoose.Schema({ name: String });

kittySchema.plugin(timestamps);

module.exports = mongoose.model('Kitten', kittySchema);
```

A `timestamps` object is added to the document, with two Date properties: `createdAt` and `modifiedAt`.

```javascript
 {
   timestamps: {
     createdAt : Date,
     modifiedAt: Date
   }
 }
```

`createdAt` is update every time a new document is created, `modifiedAt` is updated every time the document is changed.
