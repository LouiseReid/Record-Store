var _ = require("lodash")

var RecordCollector = function(cash){
  this.cash = cash
  this.records = []
}

RecordCollector.prototype = {
  buy: function(record){
    this.records.push(record)
    this.cash -= record.price
  },
  sell: function(record){
    this.cash += record.price
    return _.remove(this.records, record)
  }
}

module.exports = RecordCollector;
