import { Router } from "express";

const router = Router();

//*RENDER

router.get("/", (req, res) => {
    res.render("index")
});

//*CRUD 

router.post("/", (req, res) => {
    
        let sampleFile;
        let uploadPath;
    
        if(!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No se envió nada!');
        }
        
         sampleFile = req.files.sampleFile;
         uploadPath = __dirname + '/img' + sampleFile.name;
         
          sampleFile.mv(uploadPath, function(err) {
          if (err)
             return res.status(500).send(err);
      
           res.send('Archivo enviado');
         });
    });

export default router;