const { json } = require('body-parser')
const express = require('express')
var router = express.Router()
var {PostMessage} = require('../models/postMessage')
// ObjectID is undefined...
// var objId = require('mongoose').Types.ObjectID
var obj = require('mongoose').Types.ObjectId

// get all records
router.get('/', (req,res)=>{
    PostMessage.find((err,docs)=>{
        if(!err) res.send(docs)
        else console.log('Error while retrieving all records: ' + JSON.stringify(err,undefined,2))
    })
})

// post new record 
router.post('/', (req,res)=>{
    var newRecord = new PostMessage({
        title : req.body.title,
        message : req.body.message
    })

    newRecord.save((err,docs)=>{
        if(!err) res.send(docs)
        else console.log('Error while creating new record: ' + JSON.stringify(err,undefined,2))
    })
})

// update a record
router.put('/:id', (req,res)=>{
    if(!obj.isValid(req.params.id))
        return res.status(400).send('No record with given id: ' + req.params.id)

    var updatedRecord = {
        title : req.body.title,
        message : req.body.message
    }

    PostMessage.findByIdAndUpdate(req.params.id, {$set : updatedRecord},{new : true}, (err,docs)=>{
        if(!err) res.send(docs)
        else console.log('Error while updating a record: ' + JSON.stringify(err,undefined,2))
    })

})

// delete a record
router.delete('/:id', (req,res)=>{
    if(!obj.isValid(req.params.id))
        return res.status(400).send('No record with given id: ' + req.params.id)

    PostMessage.findByIdAndRemove(req.params.id, (err,docs)=>{
        if(!err) res.send(docs)
        else console.log('Error while deleting record: ' + JSON.stringify(err,undefined,2))
    })

})



module.exports = router