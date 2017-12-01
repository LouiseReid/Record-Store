var _ = require("lodash")

var RecordCollector = function(cash){
  this.cash = cash
  this.records = []
}

RecordCollector.prototype = {
  buy: function(record){
    if(this.cash > record.price){
      this.records.push(record)
      this.cash -= record.price
    }
    return "You can't afford this!"
  },
  sell: function(record){
    this.cash += record.price
    return _.remove(this.records, record)
  },
  collectionValue: function(){
    return _.sumBy(this.records, "price")
  },
  genreValue: function(genre){
    return _.sumBy(_.filter(this.records, {genre: genre}), "price")
  }
}

module.exports = RecordCollector;
