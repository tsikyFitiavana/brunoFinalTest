import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PropAtelier from "../propAtelier/propAtelier";
import NouveauAtelier from "../newAtelier/NewAtelier";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';
class Dashboard extends Component {

  
onLogoutClick = e => {
  e.preventDefault();
  this.props.logoutUser();
};
  render() {
    console.log('localStorage.local sur dashbord'+localStorage.id);
    
    const { user } = this.props.auth;

    return (
      <div>
       
      <div className="row">
              <div className="col-md-4">
              <div className="sidebar-fixed position-fixed">
            {/* <a href="#!" className="logo-wrapper waves-effect">
                <img alt="Mazoot Logo" src="logo.png"/>
            </a> */}
             
                        <MDBIcon icon="user" className="mr-3"/>
                        {user.nom.split(" ")[0]} <p>!! <span role="img" aria-label="kyku">👏</span> Bonjour!</p>
            <MDBListGroup className="list-group-flush">

                <NavLink exact={true} to="/" ClassName="activeClass">
                    <MDBListGroupItem>
                        <img src="logo.png" width="20px" height=" 20px" alt="logo"/>&nbsp;
                        Accueil
                    </MDBListGroupItem>
                </NavLink>
                    
                    <MDBListGroupItem>
                        <MDBIcon icon="table" className="mr-3"/>
                        <button className="btn btn-peach-gradient" id="boutonajout" onClick={()=>{
                         document.getElementById('ajoutatelier').style.display = "block";
                         document.getElementById('tableau').style.display = "none";
                        }}>Ajouter nouvelle atelier</button>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <MDBIcon icon="map" className="mr-3"/>
                      
                        <button className="btn btn-peach-gradient" id="btnliste" onClick={()=>{
                         
                         document.getElementById('ajoutatelier').style.display = "none"; 
                           document.getElementById('tableau').style.display = "block";
                        }}>Liste des ateliers</button>
                    </MDBListGroupItem>
                <MDBListGroupItem>
            
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable peach-gradient accent-3"
            >
              Deconnecter
            </button>
            </MDBListGroupItem>
            </MDBListGroup>
        </div>
              </div>
              <div className="col-md-4">
                <NouveauAtelier/>
              </div>
              <div className="col-md-4">
               
               </div>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-10"><PropAtelier/></div>
      </div>
    
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
