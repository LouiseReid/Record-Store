var RecordStore = function(name, location){
  this.name = name;
  this.location = location;
  this.balance = 0;
  this.inventory = [];
}

RecordStore.prototype = {
  addRecord: function(record){
    this.inventory.push(record)
  }
}

module.exports = RecordStore;
