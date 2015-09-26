/**
 * Mongoose Timestamps
 * simple timestamps plugin for Mongoose
 **/
 
'use strict';

function Timestamps (schema) {

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
