const { io } = require('../index.js');
const Band = require('../models/band.js');
const Bands = require('../models/bands.js');

const bands = new Bands();

bands.addBand(new Band('Metallica'));
bands.addBand(new Band('Iron Maiden'));
bands.addBand(new Band('AC/DC'));
bands.addBand(new Band('Pink Floyd'));
bands.addBand(new Band('The Who'));
bands.addBand(new Band('The Rolling Stones'));
bands.addBand(new Band('The Beatles'));

io.on('connection', (client) => {
  client.emit('getBands', bands.getBands());
  client.on('disconnect', () => {
    console.log('client disconnected');
  });
  client.on('voteBand', ({ id }) => {
    bands.voteBand(id);
    io.emit('getBands', bands.getBands());
  });
  client.on('deleteBand', ({ id }) => {
    bands.deleteBand(id);
    io.emit('getBands', bands.getBands());
  });
  client.on('addBand', ({ name }) => {
    bands.addBand(new Band(name));
    io.emit('getBands', bands.getBands());
  });
});
