const fs = require('fs')
const express = require('express')
const multer = require('multer');
const upload = multer();
const router = new express.Router()

const openapiToPostman = require('../../../openapi-to-postman/index')
const swaggerToPostman = require('../../../swagger2-postman2/index')

router.use(express.json())

router.post('/converter', upload.single('file'), async (req, res) => {

    var file = req.file,
        {format, type, convertTo} = req.query,
        buffer = Buffer.from(file.buffer),
        origFile = buffer.toString()

    var mapping = {
        'openapi3': {
            'postman2': openapiToPostman
        },
        'swagger2': {
            'postman2': swaggerToPostman
        },
    }

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