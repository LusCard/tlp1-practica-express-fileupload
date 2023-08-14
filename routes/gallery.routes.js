const {Router} = require('express')
const path = require('path');


const router = Router();

//*RENDER

router.get("/", (req, res) => {
    res.render("index")
});

//*CRUD 

router.post("/", (req, res) => {

    let sampleFile;
    let uploadPath;
    
    if (!req.files || req.files.lenght === 0){
        return res.status(400).send("No files uploaded");
    }
    
   sampleFile = req.files.sampleFile;
   uploadPath = path.join (__dirname , "../img/", sampleFile.name);

   

    sampleFile.mv(uploadPath, function(err) {
        if (err) return res.status(500).send(err);
        res.send("Files uploaded");
    });
    });


    module.exports = router;