require("dotenv").config()
const express = require("express");
const router = express.Router();
const Tour = require("../TourSchema")
const multer = require('multer')
const cloudinary = require("../cloudinary.js")
const axios = require('axios');
const { connection } = require("mongoose");
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, __dirname + "/uploads");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname)
  }
})
const uploads = multer({ storage: storage });
router.get('/',async(req,res,next)=>{
  res.json({ message: 'Servis başarıyla oluşturuldu',});
})
router.post('/', uploads.single("file"), async (req, res, next) => {
  const {title,description,type,price}=req.body
    const { path } = req.file;
  console.log(req.body)
    try {
    
      const cloudinaryResponse = await cloudinary.uploader.upload(path);
      const imageUrl = cloudinaryResponse.secure_url;
  
   
      const newTour = new Tour({
        title:title,
        description:description,
        type:type,
        price:price,
        image: imageUrl,
      });
      await newTour.save();
  
  
      res.json({ message: 'Servis başarıyla oluşturuldu', tour: newTour });
    } catch (error) {
      res.status(500).json({ message: 'Servis oluşturma işlemi başarısız oldu' });
    }
  });

module.exports = router