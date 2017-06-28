const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/drones-dev');

const DroneModel = require('../models/drone.js');

const droneArray = [
  {
    droneName: "Destructor",
    propellers: 12,
    maxSpeed: 300,
  },
  {
    droneName: "Stealthor",
    propellers: 100,
    maxSpeed: 2000,
  },
  {
    droneName: "Raptor",
    propellers: 40,
    maxSpeed: 600,
  },
];

DroneModel.create(
  droneArray,

  (err, droneResults) =>{
    if (err) {
      console.log('OMG! Database ERROR');
      return;
    }
droneResults.forEach((oneDrone)=> {
  console.log('New Drone'+ oneDrone.droneName);
  mongoose.disconnect();
});
}
  );
