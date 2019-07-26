import React, { Component } from "react";

// import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    let imgUrl = 'https://voyage-madagascar.org/wp-content/uploads/pitipoa-sy-karaoty-laoka-tsy-misy-hena-663x189.jpg'; 
    return (
      <div className="container-fluid">
        <div className="card card-image" id="header" style={{backgroundImage: 'url(' + imgUrl + ')', 
                                                          backgroundSize: 'cover', backgroundPosition: 'center center',backgroundRepeat: 'no-repeat',}}>
          <div className="text-white text-center rgba-stylish-strong py-5 px-4">
            <div className="py-5">
              <h2 id="bienvenue">VOUS ETES PASSIONNÉ DE CUISINE ?</h2>
              <p className="mb-4 pb-2 px-md-5 mx-md-5">
              Nous sommes <span id="spanheader">un centre de formation de cuisine</span>
              <br/> qui propose des ateliers à nos élèves à partir de 12 ans,<br/>
               mais aussi à des gens particuliers.<br/><br/>
               Des personnes qui veulent apprendre à  cuisiner afin de manger correctement.
              </p>
              <img src="success.gif" alt="success" width="35px" height="35px"/>
            </div>
          </div>
        </div>

        <div className="container-fluid">
        <h3 id="different">Mazooto</h3>
          <div className="row">
            <div className="col-md-6">
                <img src="logo.png" width="500px" height="350px" alt="occupation"/>
            </div>
            <div className="col-md-6">
              <div className="container-fluid">
                <h4 id="titlef">Vous propose: </h4>
                <div className="col-md-6"><h5>Pour les enfant des 12 ans</h5>
                <p> ils aurronts la possibilités de se divertir<br/>
                de decouvrire autre choses.
                </p>
                 </div>
                <div className="col-md-6">
                <h5>Pour les gents paticuliers à partir de 25 - 35 ans</h5>
                <p> Vous pouvez s'inscrire a une ateliers qui vos interesse<br/>
                de reserver votre place.
                </p>
                <h5>Cuisiner</h5>
                <p>Une partie administrateur pour les cuisiner</p>
                <p> Vous pouvez ajouter, de modifier.<br/>
               De donner l'autorisation pour que le client voix votre produit.</p>
                </div>
                </div> 
            </div>
              
          </div>
          
        </div>


        <footer className="page-footer" id="footer">
              <center>
                <span>© 2019 Copyright <span id="spanfooter">RAKOTONDRAZANAKA Bruno</span></span>
              </center>
        </footer>
      </div>
    )
  }
}

export default Landing;
