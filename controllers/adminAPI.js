// IMPORT EXPRESS SERVER
const express = require('express');

//IMPORT EMPLOYEE MODEL AND BIND IT
const CustomerModel = require('../models/bookinginfo');
const CustomerModel1 = require('../models/customerinfo');
const serinfo = require('../models/serinfo');
const CustomersellModel = require('../models/customersellinfo')
// USE Router FOR EXPRESS SERVER
const router = express.Router();

router.get('/viewalluser', (req, res) => {
    CustomerModel.find({})
        .then(getsearchdocument => {
            //console.log(getsearchdocument)
            res.status(200).send(getsearchdocument)
        } //CLOSE THEN FUNCTION BODY
        ) // CLOSE THEN
        .catch(err => {
            return res.send({ message: "DB Problem..Error in Retriving with id " + req.params.empid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
);//CLOSE GET METHOD
router.delete('/deluser/:eid', (req, res) => {
    CustomerModel.findOneAndRemove({ "buyemail": req.params.eid })
        .then(deleteddocument => {
            if (deleteddocument != null) {
                res.status(200).send('DOCUMENT DELETED successfully!' + deleteddocument);
            }
            else {
                res.status(404).send('INVALID EMP ID ' + req.params.empid);
            }
        }) //CLOSE THEN
        .catch(err => {
            return res.status(500).send({ message: "DB Problem..Error in Delete with id " + req.params.empid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
); //CLOSE Delete METHOD

router.get('/searchuser/:eid', (req, res) => {
    CustomerModel.find({ "buydob": req.params.eid })
        .then(getsearchdocument => {
            if (getsearchdocument.length > 0) {
                res.status(200).send(getsearchdocument);
            }
            else {
                res.status(404).send({ message: "Note not found with id " + req.params.empid });
            }
        }) //CLOSE THEN
        .catch(err => {
            res.status(500).send({ message: "DB Problem..Error in Retriving with id " + req.params.empid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
);//CLOSE GET METHOD

router.delete('/deluser1/:eid', (req, res) => {
    CustomerModel1.findOneAndRemove({ "cemail": req.params.eid })
        .then(deleteddocument => {
            if (deleteddocument != null) {
                res.status(200).send('DOCUMENT DELETED successfully!' + deleteddocument);
            }
            else {
                res.status(404).send('INVALID EMP ID ' + req.params.empid);
            }
        }) //CLOSE THEN
        .catch(err => {
            return res.status(500).send({ message: "DB Problem..Error in Delete with id " + req.params.empid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
); //CLOSE Delete METHOD

router.delete('/deluser2/:eid', (req, res) => {
    serinfo.findOneAndRemove({ "seremail": req.params.eid })
        .then(deleteddocument => {
            if (deleteddocument != null) {
                res.status(200).send('DOCUMENT DELETED successfully!' + deleteddocument);
            }
            else {
                res.status(404).send('INVALID EMP ID ' + req.params.empid);
            }
        }) //CLOSE THEN
        .catch(err => {
            return res.status(500).send({ message: "DB Problem..Error in Delete with id " + req.params.empid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
); //CLOSE Delete METHOD




router.get('/search', (req, res) => {
    res.send('<html><body><h1>INSIDE GET SEARCH METHOD..THIS IS SEARCH API..</h1></body></html>');
});

// DELETE RECORD/Document
router.delete('/deluser', (req, res) => {
    res.send('<h3>INSIDE DELETE METHOD..THIS IS DELETE API..</h3>');
});
router.get('/viewalluser1', (req, res) => {
    CustomerModel1.find({})
        .then(getsearchdocument => {
            //console.log(getsearchdocument)
            res.status(200).send(getsearchdocument)
        } //CLOSE THEN FUNCTION BODY
        ) // CLOSE THEN
        .catch(err => {
            return res.send({ message: "DB Problem..Error in Retriving with id " + req.params.empid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
);//CLOSE GET METHOD

router.get('/viewalluser2', (req, res) => {
    serinfo.find({})
        .then(getsearchdocument => {
            //console.log(getsearchdocument)
            res.status(200).send(getsearchdocument)
        } //CLOSE THEN FUNCTION BODY
        ) // CLOSE THEN
        .catch(err => {
            return res.send({ message: "DB Problem..Error in Retriving with id " + req.params.empid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
);//

router.get('/viewalluser3', (req, res) => {
    CustomersellModel.find({})
        .then(getsearchdocument => {
            //console.log(getsearchdocument)
            res.status(200).send(getsearchdocument)
        } //CLOSE THEN FUNCTION BODY
        ) // CLOSE THEN
        .catch(err => {
            return res.send({ message: "DB Problem..Error in Retriving with id " + req.params.empid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
);//
//SHOULD BE EXPORTED
module.exports = router;