var assert = require("assert");
var RecordStore = require("../record_store.js")
var Record = require("../record.js")

describe("Record Store", function(){

  var recordStore;
  var record1;
  var record2;

  beforeEach(function(){
    recordStore = new RecordStore("Fopp", "Glasgow");
    record1 = new Record("Liam Gallagher", "As You Were", "Rock", 10);
    record2 = new Record("The Venga Boys", "We Like to Party", "Euro Pop", 2)

  });

  it("should have a name", function(){
    assert.strictEqual(recordStore.name, "Fopp")
  });
  it("should have a location", function(){
    assert.strictEqual(recordStore.location, "Glasgow")
  });
  it("should have an inventory that starts at 0", function(){
    assert.strictEqual(recordStore.inventory.length, 0)
  });
  it("should have a balance that starts at 0", function(){
    assert.strictEqual(recordStore.balance, 0)
  });
  it("should be able to add records to the inventory", function(){
    recordStore.addRecord(record1);
    assert.strictEqual(recordStore.inventory.length, 1)
  });
  it("should be able to list the inventory", function(){
    recordStore.addRecord(record1);
    assert.deepStrictEqual(recordStore.inventorylist(), [record1])
  });
  it("can sell a record", function(){
    recordStore.addRecord(record1);
    recordStore.sellRecord(record1);
    assert.strictEqual(recordStore.balance, 10);
    assert.strictEqual(recordStore.inventory.length, 0);
  });
  it("should show the financial situ - balance and value of inventory", function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.sellRecord(record2);
    assert.strictEqual(recordStore.financials(),"Inventory value: 10 Store Balance: 2" )
  })
})
