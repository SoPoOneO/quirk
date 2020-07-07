class TileSequence {

  constructor(tiles){
    this.tiles = tiles;
  }

  isIllegal(){
    return this._hasNoPattern() ||
           this._hasRepeats();
  }

  _hasNoPattern(){

    return this._getUniqueVals('color').size > 1 &&
           this._getUniqueVals('shape').size > 1;
  }

  _hasRepeats(){
    var combos = this.tiles.map(tile => JSON.stringify(tile));

    var comboSet = new Set(combos);

    return comboSet.size < this.tiles.length;
  }

  _getUniqueVals(prop){
    var vals = this.tiles.map(tile => {
      return tile[prop];
    });
    return new Set(vals);
  }

  static getSequencesFromGrid(grid){
    var sequences = [];
    TileSequence.gridToLines(grid).forEach(line => {
      TileSequence.lineToSqueces(line).forEach(sequence => {
        sequence.push(sequence);
      })
    })
    return sequences;
  }

  static gridToLines(grid){
    var lines = [];
    grid.forEach(row => {
      lines.push(row);
    })

  }

  static lineToSequences(line){
    var sequences = [];
    var aggregator = [];
    line.forEach(tile => {
      if(tile == null){
        if(aggregator.length > 1){
          sequences.push(aggregator.splice(0));
        }
        aggregator = [];
      }else{
        aggregator.push(tile);
      }
    });
    if(aggregator.length > 1){
      sequences.push(aggregator.slice(0));
    }
    return sequences;
  }


}

module.exports = TileSequence;