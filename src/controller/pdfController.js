const { mkDirByPathSync, uploadFile } = require('../helpers/fileHelper');
let { pdfParserService } = require("../services");
const path = require('path');

let pdfController = {
    view: async (req, res) => {
        try {
            res.render('pdf/upload');
        } catch (error) {
            req.flash("error_msg", "something went wrong");
        }
    },

    uploadPdf: async (req, res) => {
        try {
            if (req.files) {
                let rootDir = 'public';
                let absDir = '/uploads/pdf/';
                let dir = rootDir + absDir;
                mkDirByPathSync(dir);
                fileName = await uploadFile(
                    req.files,
                    dir
                );
                updatedFileName = absDir + fileName

                const newFileName = path.join(dir,fileName);
                const pdfText = await pdfParserService.pdfParse(newFileName)
                res.render('pdf/result', { pdfText });
            }else {
                req.flash("error_msg", "No files were uploaded.");
                res.redirect('/');
            }

        } catch (error) {
            console.log(error)
            req.flash("error_msg", "something went wrong");
        }
    },
};

module.exports = pdfController;
