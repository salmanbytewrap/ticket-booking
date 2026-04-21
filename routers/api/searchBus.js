const express = require("express");
const auth = require("../../middleware/auth");
const Buses = require("../../models/Buses")
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;
const URL = require('../../config/default.json')
// console.log(URL.mongoURI)

router.get('/', (req, res) => res.send("bus part "))

router.get("/:start/:end", async (req, res) => {
    const start = req.params.start.toLowerCase();
    const end = req.params.end.toLowerCase();

    try {
        // Case-insensitive query using regex
        const buses = await Buses.find({
            stops: {
                $all: [
                    new RegExp(`^${start}$`, "i"),
                    new RegExp(`^${end}$`, "i")
                ]
            }
        });

        if (buses.length === 0) {
            return res.send([]);
        }

        let finalBus = [];

        for (let bus of buses) {
            let counter = 0;
            let tempStops = [];

            let stops = bus.stops.map(s => s.toLowerCase());

            for (let j of stops) {
                if (j === (counter === 0 ? start : end)) {
                    tempStops.push(j);
                    counter++;
                }
            }

            if (JSON.stringify(tempStops) === JSON.stringify([start, end])) {
                finalBus.push(bus);
            }
        }

        // const stops_ = [req.params.start, req.params.end]
        // try {
        //     const buses = await Buses.find({ stops: { $all: stops_ } })
        //     if (buses.lenght == 0) {
        //         res.send([])
        //     } else {
        //         finalBus = []
        //         for (bus of buses) {
        //             counter = 0
        //             tempStops = []
        //             stops = bus.stops
        //             for (j of stops) {
        //                 if (j == stops_[counter]) {
        //                     tempStops.push(j)
        //                     counter++
        //                 }
        //             }
        //             if (JSON.stringify(tempStops) == JSON.stringify(stops_)) {
        //                 finalBus.push(bus)
        //             }

        //         }
        res.send(finalBus)


    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
});

router.post("/addBus", async (req, res) => {
    try {
        const { name, company, stops, date } = req.body;
        if (!name || !company || !stops) {
            return res.status(400).json({ msg: "Please enter all fields" });
        }
        // create new bus object
        const newBus = new Buses({
            name,
            company,
            stops
        });

        // save to database
        const bus = await newBus.save();

        res.json(bus);

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});


module.exports = router;
