var _ = require("lodash")

var RecordStore = function(name, location){
  this.name = name;
  this.location = location;
  this.balance = 0;
  this.inventory = [];
}

RecordStore.prototype = {
  addRecord: function(record){
    this.inventory.push(record)
  },
  inventorylist: function(){
    return _.forEach(this.inventory);
  },
  sellRecord: function(record){
    this.balance += record.price;
    return _.remove(this.inventory, (record))
  },
  financials: function(){
    var inventoryValue = _.sumBy(this.inventory, "price");
    return "Inventory value: " + inventoryValue + " Store Balance: " + this.balance;
  }
}

module.exports = RecordStore;
