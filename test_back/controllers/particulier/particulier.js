const Particulier = require('../../models/particulier.model');
const Atelier = require('../../models/Atelier.model')


// exports.createPart = (req, res) => {
//     Particulier.find().then(us => {

//         if (us.length == 0) {
//             id = 0
//         }
//         else {
//             id = us[us.length - 1]._id + 1
//         }
//     }

//     )




//     Particulier.findOne({
//         Email: req.body.Email
//     }).then(use => {
//         if (use) {
//             return res.status(400).json({
//                 Email: 'Email already exists'
//             });
//         }
//         else {




//             Atelier.findById(req.params._id).then(use => {
//                 const particulier = new Particulier({
//                     _id: id,
//                     nom: req.body.nom,
//                     prenom: req.body.prenom,
//                     phone: req.body.phone,
//                     email: req.body.email

//                 });
//                 Atelier.findByIdAndUpdate(use._id, {

//                     _id: use.id,
//                     idUser: use.idUser,
//                     titre: use.titre,
//                     description: use.description,
//                     date: use.date,
//                     debut: use.debut,
//                     duree: use.duree,
//                     place: use.place - 1,
//                     placeRes: use.placeRes + 1,
//                     prix: use.prix,
//                     image: use.image
//                     // photo_profil: use.nomImage +'.jpg',

//                 }).then(upd => console.log(upd))
//                 particulier
//                     .save()
//                     .then(user => {
//                         res.json(user)
//                     });
//             });
//         }

//     });
// }
exports.createPart = (req,res) => {
    // Particulier.find().then(use=>{
    //     // const { errors, isValid } = validateRegisterInput(req.body);
    //     var id;
    //     if(use.length==0){
    //         id=0
    //     }
    //     else{
    //         id=use[use.length-1]._id+1
    //     }



        Particulier.find().then(us=>{

            if(us.length==0){
                id=0
            }
            else{
                id=us[us.length-1]._id+1
            }
         }
    
         )
    
    
    
    
        Particulier.findOne({
            Email: req.body.Email
        }).then(use=>{
            if(use) {
                return res.status(400).json({
                    Email: 'Mail exist deja'
                });
            }
            else{



       
        Atelier.findById(req.params._id).then(use=>{
                const particulier = new Particulier({
                    _id:id,
                    nom: req.body.nom,
                    prenom: req.body.prenom,
                    phone:req.body.phone,
                    email: req.body.email       
                    
                });
                console.log('aiza ahhhhhhhhhh'+use);
                
                Atelier.findByIdAndUpdate(use._id, {
                    
                    _id:use._id,
                    idUser:use.idUser,
                    titre: use.titre,
                    description: use.description,
                    date: use.date,
                    debut: use.debut,
                    duree:use.duree,
                    place: use.place-1,
                    placeRes: use.placeRes+1,
                    prix:use.prix,
                    image: use.image
                    // photo_profil: use.nomImage +'.jpg',
                
                }).then(upd=>console.log(upd)
                )
                                particulier
                                    .save()
                                    .then(user => {
                                        res.json(user)
                                    }); 
                                });  
                            }       
                            
                        }); 
}



































//Get un par un image
// exports.findOneArticle = (req, res) => {
//     try {
//         let picture = fs.readFileSync('./controllers/atelier/public/' + req.params.image)
//         console.log('params: ', req.params.image);
//         res.write(picture)
//         res.end()
//     }
//     catch (e) { console.log("envoie erroné: ", e); }
// }



// exports.findAllArticle = (req, res) => {
//     Atelier.find()
//         .then(atel => {
//             res.send(atel);
//         }).catch(err => {
//             res.status(500).send(atel => {
//                 message: err.message || "Something wrong while retrieving profils."
//             });
//         });
// };