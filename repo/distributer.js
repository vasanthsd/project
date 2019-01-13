var express = require('express');
let routes = function (Distributor) {
    var distributorRouter = express.Router();

    distributorRouter.route('/')
        .get(function (req, res) {
            var query = {};
            if (req.query.cityName) {
                query.cityName = req.query.cityName;
            }
            Distributor.find(query, function (err, dist) {
                if (err) {
                    res.status(500).send("Error occur while trying to retrieve user in a db");
                }
                else {
                    res.status(200).send(dist)
                }
            })
        })
        .post(function (req, res) {
            var dist = new Distributor(req.body);
            dist.save()
            res.status(201).send(dist);
        }
        )

    distRouter.route('/:id')
        .get(function (req, res) {
            var query = req.query;
            var id = req.params.id;

            Distributor.findById(query, id, function (err, dist) {
                if (err) {
                    res.status(500).send('unable to retrieve user in db');
                }
                else {
                    res.status(200).send(dist);
                }
            })
        }
        )
        .put(function (req, res) {
            var id = req.params.id;
            var dist = req.body;

            Distributor.findByIdAndUpdate(id, dist, function (err, dist) {
                Distributor.findOne(id, function () {
                    if (err) {
                        res.status(500);
                    }
                    else {
                        dist.cityName = req.body.cityName;
                        dist.countryName = req.body.countryName;
                        dist.cityCode = req.body.cityCode;
                        dist.ProvinceName = req.body.ProvinceName;
                        dist.ProvinceCode = req.body.ProvinceCode;
                        dist.CountryCode = req.body.CountryCode;
                        dist.save();
                        res.status(202).send(dist);
                    }
                })
            })

        })
        .delete(function (req, res) {
            var id = req.params.id;
            Distributor.findByIdAndRemove(id, function (err, dist) {
                if (err) {
                    res.status(500);
                }
                else {
                    res.status(204).send(dist);
                }
            })
        })

    return distRouter;

}


module.exports = routes;



