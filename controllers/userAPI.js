
// IMPORT EXPRESS SERVER
const express = require('express');

//IMPORT EMPLOYEE MODEL AND BIND IT
const BuyModel = require('../models/bookinginfo');
const CustomerModel = require('../models/customerinfo');
const serModel = require('../models/serinfo')
const CustomersellModel = require('../models/customersellinfo')
const mailservice = require('../services/mailService.js');
// USE Router FOR EXPRESS SERVER
const router = express.Router();

// INSERT RECORD/Document
router.post('/book', (req, res) => {
    //Create Object of Employee Model Class
    // And Receive value from request body and Store value within the Object
    const buyobj = new BuyModel({
        buyname: req.body.buyname,
        buyemail: req.body.buyemail,
        buymobile: req.body.buymobile,
        buydob: req.body.buydob,
        buypass: req.body.buypass,
        buygender: req.body.buygender,
        buycar: req.body.buycar,
        buyaddress: req.body.buyaddress,
    });//CLOSE EmpModel

    //INSERT/SAVE THE RECORD/DOCUMENT
    buyobj.save()
        .then(inserteddocument => {
            mailservice.sendmail(req.body.buyemail, 'BOOKING SUCCESSFUL', 'Thank you for Booking Im glad your car search has brought you to MOTOEMPORIUM and I look forward to offering you any information I can about the fantastic  we have on the lot');
            res.send('DOCUMENT INSERED IN MONGODB DATABASE' + '<br\>' + inserteddocument)

        })//CLOSE THEN
        .catch(err => {
            res.send('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
            process.exit();
        });

    res.send('<h3>INSIDE POST METHOD..THIS IS INSERT API..</h3>');
});


// UPDATE RECORD/Document
router.put('/update', (req, res) => {
    res.send('<h2>INSIDE PUT METHOD..THIS IS UPDATE API..</h2>');
});
router.post('/userlogin', (req, res) => {
    //console.log(req.body.loginemail)
    //console.log(req.body.emppass)
    EmpModel.find({ "empemail": req.body.loginemail, "emppass": req.body.loginpass })
        .then(getsearchdocument => {
            //console.log(getsearchdocument)
            if (getsearchdocument.length > 0) {
                res.status(200).send(getsearchdocument)
            }
            else {
                res.status(404).send({ message: "NOT MATCHED" })
            }
        }) // CLOSE THEN
        .catch(err => {
            return res.send({ message: "DB Problem..Error in Retriving with id " + req.params.empid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
)//CLOSE POST METHOD 
router.post('/userreg', (req, res) => {
    //Create Object of Employee Model Class
    // And Receive value from request body and Store value within the Object
    const customerobj = new CustomerModel({
        cname: req.body.cname,
        cemail: req.body.cemail,
        cphone: req.body.cphone,
        ccar: req.body.ccar,
        cbudget: req.body.cbudget,
        cfuel: req.body.cfuel,
        cmessage: req.body.cmessage,
    });//CLOSE EmpModel

    //INSERT/SAVE THE RECORD/DOCUMENT
    customerobj.save()
        .then(inserteddocument => {
            mailservice.sendmail(req.body.cemail, 'Thanks for showing your interest in MOTOEMPORIUM', 'We will get in touch with you as soon as we get your stock ready.Thanks for showing your interest in MOTOEMPORIUM. We will get in touch with you as soon as we get your stock ready');
            res.send('DOCUMENT INSERED IN MONGODB DATABASE' + '<br\>' + inserteddocument);

        })//CLOSE THEN
        .catch(err => {
            res.send('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
            process.exit();
        });

    res.send('<h3>INSIDE POST METHOD..THIS IS INSERT API..</h3>');
});

router.post('/sell', (req, res) => {
    //Create Object of Employee Model Class
    // And Receive value from request body and Store value within the Object
    const customersellobj = new CustomersellModel({
        cname: req.body.cname,
        cemail: req.body.cemail,
        cphone: req.body.cphone,
        ccar: req.body.ccar,
        creg: req.body.creg,
        ckm: req.body.ckm,
        cdat: req.body.cdat,
        cprice: req.body.cprice,
        cowner: req.body.cowner,
    });//CLOSE EmpModel

    //INSERT/SAVE THE RECORD/DOCUMENT
    customersellobj.save()
        .then(inserteddocument => {
            mailservice.sendmail(req.body.cemail, 'SUBMIT SUCCESSFUL', 'Thanks for showing your interest in MOTOEMPORIUM. Our executive will get in touch with you shortly. Im glad your car search has brought you to MOTOEMPORIUM and I look forward to offering you any information I can about the fantastic  we have on the lot');
            res.send('DOCUMENT INSERED IN MONGODB DATABASE' + '<br\>' + inserteddocument);

        })//CLOSE THEN
        .catch(err => {
            res.send('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
            process.exit();
        });

    res.send('<h3>INSIDE POST METHOD..THIS IS INSERT API..</h3>');
});

router.post('/CarServicing', (req, res) => {
    //Create Object of Employee Model Class
    // And Receive value from request body and Store value within the Object
    const serobj = new serModel({
        sername: req.body.sername,
        serservice: req.body.serservice,
        seremail: req.body.seremail,
        sermobile: req.body.sermobile,
        sermake: req.body.sermake,
        serdate: req.body.serdate,
        sertime: req.body.sertime,
        sergender: req.body.sergender,
        seraddress: req.body.seraddress,
    });//CLOSE EmpModel

    //INSERT/SAVE THE RECORD/DOCUMENT
    serobj.save()
        .then(inserteddocument => {
            mailservice.sendmail(req.body.seremail, 'SLOT FOR SERVICE SUCESSFULL','Thanks for booking a slot for servicing in MOTOEMPORIUM. Our executive will get in touch with you shortly.');
            res.send('DOCUMENT INSERED IN MONGODB DATABASE' + '<br\>' + inserteddocument);

        })//CLOSE THEN
        .catch(err => {
            res.send('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
            process.exit();
        });

    res.send('<h3>INSIDE POST METHOD..THIS IS INSERT API..</h3>');
});
//SHOULD BE EXPORTED
module.exports = router;