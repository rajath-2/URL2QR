import express from "express";
import qr from "qr-image";
import bodyParser from "body-parser"

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
    res.render("index.ejs");
});
app.post("/submit",(req,res)=>{
    var urlLink = req.body.URL;
    var qr_png = qr.imageSync( urlLink, { type: 'png' });
    const imageBase64 = qr_png.toString('base64');
    const imageSrc = `data:image/png;base64,${imageBase64}`;
    res.render("index.ejs", {
        imageSrc: imageSrc, 
    });
});

app.listen(port,()=>{
    console.log(`server atarted at ${port}`);
});