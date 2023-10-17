const pdf = require('pdf-parse');
const fs = require('fs');

"use strict";
let pdfParseService = {};

pdfParseService.pdfParse = async (filePath) => {
  try {

    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);
    return data.text;
  } catch (error) {
    throw error;
  }
};


module.exports = pdfParseService;
