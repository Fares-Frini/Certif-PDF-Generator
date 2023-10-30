const pdfDocument =require('pdfkit');

const fs = require('fs');

const names=["Mohamed Fares Frini","Salma Ridene","Abdou Souid"]

for (let i = 0; i < names.length; i++) {

const doc = new pdfDocument({ bufferPages: true, font: 'fonts/Niconne-Regular.ttf' ,size:'A4',layout:'landscape'});

doc.pipe(fs.createWriteStream(`output/Certif ${names[i]}.pdf`))

doc.image("images/certif.png", 0,0, {width: doc.page.width, height: doc.page.height});

doc.fontSize(60)
	.text(names[i],130,290,{align:'center'}); 

doc.end();

}