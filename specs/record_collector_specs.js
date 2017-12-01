var assert = require("assert");
var RecordCollector = require("../record_collector.js")

describe("Record Collector", function(){

  var recordCollector;

  beforeEach(function(){
    recordCollector = new RecordCollector(10);
  });
  it("should have cash", function(){
    assert.strictEqual(recordCollector.cash, 10)
  });
  it("should have an empty collection to start off with", function(){
    assert.strictEqual(recordCollector.records.length, 0)
  });

})
