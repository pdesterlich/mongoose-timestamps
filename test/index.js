'use strict';

var
  mongoose = require('mongoose'),
  should   = require('chai').should(),
  Kitten   = require('./kitten');

var
  databaseConnection = process.env.TIMESTAMPS_TEST || 'mongodb://localhost/timestamps_test';

mongoose.connect(databaseConnection);

describe('Timestamps', function() {

  before(function (done) {
    Kitten.remove(function (err) {
      done(err);
    });
  });

  it ('Should save createdAt timestamp', function (done) {
    new Kitten({ name: 'Pango'}).save(function (err, kitten) {
      should.not.exist(err);
      kitten.should.have.property('timestamps');
      kitten.timestamps.should.be.an('object');
      kitten.timestamps.should.have.property('createdAt');
      kitten.timestamps.should.have.property('modifiedAt');
      kitten.timestamps.createdAt.toString().should.equal(kitten.timestamps.modifiedAt.toString());
      done();
    });
  });

  it ('Should save modifiedAt timestamp', function (done) {
    Kitten.findOne({ name: 'Pango'}, function (err, kitten) {
      setTimeout(function () {
        kitten.name = 'Pango 2';
        kitten.save(function (err, kitten) {
          should.not.exist(err);
          kitten.should.have.property('timestamps');
          kitten.timestamps.should.be.an('object');
          kitten.timestamps.should.have.property('createdAt');
          kitten.timestamps.should.have.property('modifiedAt');
          kitten.timestamps.modifiedAt.toString().should.be.above(kitten.timestamps.createdAt.toString());
          done();
        });
      }, 1000);
    });
  });

});
