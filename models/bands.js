const Band = require('./band');

class Bands {
  bands;
  constructor() {
    this.bands = [];
  }

  addBand(band = new Band()) {
    this.bands.push(band);
  }

  getBands() {
    return this.bands;
  }

  deleteBand(id) {
    this.bands = this.bands.filter((band) => band.id !== id);
  }

  voteBand(id) {
    const band = this.bands.find((band) => band.id === id);
    band.votes++;
  }
}

module.exports = Bands;
