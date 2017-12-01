var Record = function(artist, title, genre, price){
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
}

Record.prototype = {
  properties: function(){
    return this.artist + ": " + this.title + ", " + this.genre + ", " + this.price;
  }
}

module.exports = Record;
