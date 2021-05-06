const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const clientmodel = require('../models/client.js')
const paymentmodel = require('../models/payment.js')
router.get('/', (req, res) => {
    res.send('welcome to payment')
})
router.post('/client', async (req, res) => {
    var clientDetails = {
        name: req.body.name,
        email: req.body.email,
        cpf: req.body.cpf //123.567.234-67
    }
    const newClient = new clientmodel(clientDetails)
    const clientdata = await newClient.save()
    console.log(clientdata);
    res.json("Details saved successfully...")
})

router.post('/payment', (req, res) => {
    clientmodel.findOne({ name: req.body.name }, (err, data) => {
        console.log(data)
        if (req.query.type === 'card') {
            var paymentDetails = {
                name: data.name,
                amount: req.body.amount,
                method: req.query.type,
                date: new Date(),
                status: "successs"
            }
            var cardDetail = {
                holder: req.body.holder,
                number: req.body.number,
                exp: req.body.exp,
                cvv: req.body.cvv
            }
            const newPayment = new paymentmodel(paymentDetails)
            const paymentData = newPayment.save();
            console.log(paymentData);
            res.json({
                client: data,
                method: req.query.type,
                card: cardDetail,
                amount: req.body.amount
            });
        } else if (req.query.type === 'boleto') {
            var paymentDetails = {
                name: data.name,
                amount: req.body.amount,
                method: req.query.type,
                date: new Date(),
                status: "successs"
            }
            res.json({
                client: data,
                vamount: req.body.amount,
                method: req.query.type
            });
            const newPayment = new paymentmodel(paymentDetails)
            const paymentData = newPayment.save();
            console.log(paymentData);
        }

    })
})
router.post('/payments', (req, res) => {
    clientmodel.findOne({ name: req.body.name }, (err, data) => {
        paymentmodel.find({ name: data.name }, (err, result) => {
            console.log(result)
            res.json(result);
        })
    })

})
module.exports = router;