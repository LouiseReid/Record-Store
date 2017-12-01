var _ = require("lodash")

var RecordCollector = function(name, cash){
  this.name = name
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
  },
  mostValuable: function(){
    return _.maxBy(this.records, "price")
  },
  sortRecordsAsc: function(){
    return _.sortBy(this.records, "price")
  },
  sortRecordsDesc: function(){
    return _.sortBy(this.records, "price").reverse()
  },
  compare: function(collection1, collection2){
    if(collection1.collectionValue() > collection2.collectionValue()){
      return collection1.name + "'s collection is worth more"
    }
    return collection2.name + "'s collection is worth more"
  }
}

module.exports = RecordCollector;
