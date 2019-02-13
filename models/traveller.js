const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(trip => trip.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
    return this.journeys.map(trip => trip.endLocation);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(trip => trip.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(trip => trip.distance > minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((tally, trip) => tally += trip.distance, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  //this is using spread?
  // return [...new Set(this.journeys.map(trip => trip.transport))]
  return Array.from(new Set(this.journeys.map(trip => trip.transport)))
}

Traveller.prototype.totalDistance = function () {
  return this.journeys.reduce(((total, trip) => total += trip.distance),0);
};

module.exports = Traveller;
