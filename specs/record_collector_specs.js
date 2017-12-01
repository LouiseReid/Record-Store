var assert = require("assert");
var RecordCollector = require("../record_collector.js");
var Record = require("../record.js");


describe("Record Collector", function(){

  var recordCollector;
  var record1;
  var record2;
  var record3;

  beforeEach(function(){
    recordCollector = new RecordCollector(20);
    record1 = new Record("Liam Gallagher", "As You Were", "Rock", 10);
    record2 = new Record("The Venga Boys", "We Like to Party", "Euro Pop", 2);
    record3 = new Record("The Beatles", "Platinum Vol 1", "Rock")
  });
  it("should have cash", function(){
    assert.strictEqual(recordCollector.cash, 20)
  });
  it("should have an empty collection to start off with", function(){
    assert.strictEqual(recordCollector.records.length, 0)
  });
  it("should be able to buy records", function(){
    recordCollector.buy(record1);
    assert.strictEqual(recordCollector.records.length, 1)
    assert.strictEqual(recordCollector.cash, 10)
  });
  it("should be able to sell records", function(){
    recordCollector.buy(record1);
    recordCollector.buy(record2);
    recordCollector.sell(record1);
    assert.strictEqual(recordCollector.records.length, 1)
    assert.strictEqual(recordCollector.cash, 18)
  });
  it("shouldn't be able to buy a record if it can't afford it", function(){
    assert.strictEqual(recordCollector.buy(record3), "You can't afford this!")
    assert.strictEqual(recordCollector.records.length, 0)

  })


})
