var assert = require("assert");
var Record = require("../record.js")


describe("Record", function(){

  var record;

  beforeEach(function(){
    record = new Record("Liam Gallagher", "As You Were", "Rock", 10)
  });
  it("should have an artist", function(){
    assert.strictEqual(record.artist, "Liam Gallagher")
  });
  it("should have a title", function(){
    assert.strictEqual(record.title, "As You Were")
  });
  it("should have a genre", function(){
    assert.strictEqual(record.genre, "Rock")
  });
  it("should have a price", function(){
    assert.strictEqual(record.price, 10)
  })
})
