'use strict';

var
  _ = require('lodash');

function Timestamps (schema, options) {

  // options = _.defaults(options || {}, Timestamps.defaultOptions);

  schema.add({
    timestamps: {
      createdAt: Date,
      modifiedAt : Date
    }
  });

  schema.pre('save', function (next) {
    var timestamp = Date.now();

    if (!this.timestamps.createdAt) this.timestamps.createdAt = timestamp;
    this.timestamps.modifiedAt = timestamp;

    next();
  });
}

module.exports = Timestamps;
