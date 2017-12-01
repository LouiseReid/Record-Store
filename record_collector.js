var _ = require("lodash")

var RecordCollector = function(cash){
  this.cash = cash
  this.records = []
}

module.exports = RecordCollector;
