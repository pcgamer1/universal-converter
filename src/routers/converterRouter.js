const fs = require('fs')
const express = require('express')
const cors = require('cors')
const multer = require('multer');
const upload = multer();
const router = new express.Router()

const { mapping } = require('../constants/config')

router.use(express.json())

router.post('/converter', cors(), upload.single('file'), async (req, res) => {

    var file = req.file,
        {format, type, convertTo} = req.query,
        buffer = Buffer.from(file.buffer),
        origFile = buffer.toString()

    if (mapping[format] && Object.keys(mapping[format]).includes(convertTo)) {
        try {
            mapping[format][convertTo].convert({ type: type, data: origFile },
                {}, (err, conversionResult) => {
                    if (!conversionResult.result) {
                        res.status(400).send({"result": "error", "message": conversionResult.reason})
                    }
                    else {
                        res.status(200).send({"result": "success", "message": "Conversion successful.", "data": conversionResult.output[0].data})
                    }
                }
            );
        } catch(e) {
            res.status(500).send()
        }
    }

    else {
        res.status(400).send({"result": "error", "message": "No conversion mapping found."})
    }
})


module.exports = router