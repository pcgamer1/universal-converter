const fs = require('fs')
const express = require('express')
const multer = require('multer');
const upload = multer();
const router = new express.Router()

const opentopostman = require('../../../openapi-to-postman/index')

router.use(express.json())

router.post('/converter', upload.single('file'), async (req, res) => {

    var file = req.file,
        {format, type, convertTo} = req.query,
        buffer = Buffer.from(file.buffer),
        origFile = buffer.toString()

    var mappings = {
        'openapi': ['postman2']
    }

    if (mappings[format].includes(convertTo)) {
        if (format === 'openapi' && convertTo === 'postman2')  {
            try {
                opentopostman.convert({ type: type, data: origFile },
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
    }

    else {
        res.status(400).send({"result": "error", "message": "No conversion mapping found."})
    }
})


module.exports = router