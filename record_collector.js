var _ = require("lodash")

var RecordCollector = function(cash){
  this.cash = cash
  this.records = []
}

RecordCollector.prototype = {
  buy: function(record){
    this.records.push(record)
  },
  sell: function(record){
    return _.remove(this.records, record)
  }
}

module.exports = RecordCollector;
