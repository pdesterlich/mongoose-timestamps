'use strict';

var
  mongoose   = require('mongoose'),
  timestamps = require('../');

var
  kittySchema = mongoose.Schema({ name: String });

kittySchema.plugin(timestamps);

module.exports = mongoose.model('Kitten', kittySchema);
