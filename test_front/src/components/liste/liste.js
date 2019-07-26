import React, { Component } from 'react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default class ListTout extends Component {

    constructor(props) {
        super(props);
        this.state = {

            nom: '',
            prenom: '',
            email: '',
            phone: '',
            profil: []
        };
        this.onChange = this.onChange.bind(this)

    }
    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/users/newArticle')
            .then(response => {
                this.setState({ profil: response.data });
                console.log('profil: ', this.state.profil);

            })
            .catch(function (error) {
                console.log(error);
            })

    }

    liste() {
        return <div>
            <div className="container-fluid">
            <div className="row view-group" id="colonne">

                {
                    (this.state.profil.length > 0) ? (this.state.profil.filter((params)=>params.visib).map((obj) => {
                        return <div class="item col-xs-3 col-lg-3" id="carte">
                            <div className="card card-cascade narrower card-ecommerce">
                                    <img width="auto" id="imageproduit" height="230px"
                                        src={'http://localhost:8080/api/users/newArticleImage/' + obj.image}
                                        alt="pdp" />
                                        {console.log('tung eto fa ts afaka anh')}
                                <div className="card-body card-body-cascade">
                                    <center>
                                        <h6 id="description">
                                            <span id="nomproduit">
                                            {obj.titre}
                                            </span>
                                            </h6>
                                            </center>
                                            <div className="row">
                                                    <div className="col-md-6">
                                                    
                                                        <p className="card-text">
                                                            <strong>
                                                                <span id="description">Description</span></strong>&nbsp;&nbsp;
                                                                 <div id="point">
                                                                 {obj.description}
                                                                 </div>
                                                                  </p>
                                                        <p className="card-text">
                                                            <strong>
                                                                <span id="description">
                                                                    Date</span></strong>&nbsp;&nbsp;
                                                                     <div id="point">
                                                                     {obj.date}
                                                                     </div> 
                                                                     </p>
                                                        <p className="card-text">
                                                            <strong>
                                                                <span id="description">
                                                                    Nombre de place disponible
                                                                    </span>
                                                                    </strong>&nbsp;&nbsp; 
                                                                    <div id="point">{obj.place}
                                                                    </div>
                                                                </p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p className="card-text">
                                                            <strong><span id="description">
                                                                Heure du debut
                                                                </span></strong>&nbsp;&nbsp; 
                                                                <div id="point">
                                                                {obj.debut}
                                                                </div> </p>
                                                        <p className="card-text"  id="colonne2">
                                                            <strong><span id="description">
                                                                Durée de l'atelier</span>
                                                                </strong>&nbsp;&nbsp; <div id="point">
                                                                {obj.duree}
                                                                </div> </p>
                                                        <p className="card-text">
                                                            <strong><span id="description">
                                                                Nombre de place reserve
                                                                </span></strong>&nbsp;&nbsp; <div id="point">
                                                                {obj.placeRes}
                                                                </div> </p>
                                                    </div>
</div>
                                </div>
                                <span className="spanprix">
                                            <strong>Prix: {obj.prix} Ar</strong>
</span><br />
                                {/* <div className="col-md-2">
                                    <div className="row">
                                        <div className="container-fluid">
                                            <h2>
                                                {obj.titre}
                                            </h2>
                                            <p><strong>{obj.prix}</strong></p>
                                        </div>

                                    </div>
                                </div> */}
                                <div className="container">
                                    <button class="btn btn-success" onClick={() => {
                                        confirmAlert({
                                            customUI: ({ onClose }) => {
                                                return (
                                                    <center>
                                                        <div className='custom-ui'>
                                                            <div >
                                                                <h4>Inscription pour l 'Atelier {obj.Titre}</h4>
                                                                <input name="nom" onChange={this.onChange}
                                                                    value={this.state.value} placeholder="Nom" /><br></br>
                                                                <input name="prenom" placeholder="Prenom" onChange={this.onChange} value={this.state.value} /><br></br>
                                                                <input name="phone" placeholder="Numero téléphone" onChange={this.onChange} value={this.state.value} /><br></br>
                                                                <input name="email" placeholder="Email" onChange={this.onChange} value={this.state.value} /><br></br>

                                                                <button onClick={() => {
                                                                    axios.post("http://localhost:8080/api/users/particulier/" + obj._id, {
                                                                        nom: this.state.nom,
                                                                        prenom: this.state.prenom,
                                                                        phone: this.state.phone,
                                                                        email: this.state.email

                                                                    }).then(res => {
                                                                        console.log('ts afaka ono ah,iiiiii');
                                                                        
                                                                        console.log(res.data);
                                                                        axios.get("http://localhost:8080/api/users/newArticle").then(res => {
                                                                                console.log('Zao za aty amzao kah')
                                                                                
                                                                            this.setState({ profil: res.data })
                                                                            console.log(this.state.profil)

                                                                        })
                                                                    })

                                                                    onClose();
                                                                }}
                                                                >
                                                                    confirmer
                                                                </button>
                                                                <button onClick={onClose}>No</button>
                                                            </div>

                                                        </div></center>
                                                );
                                            }
                                        });
                                    }} id="lokoAfa" >S'inscrire</button>
                                </div>
                            </div>
                        </div>

                    })) : ('')
                }
                </div>

            </div>
        </div>
    }
    render() {
        return (
            <div>
                {this.liste()}
            </div>
        );
    }
}