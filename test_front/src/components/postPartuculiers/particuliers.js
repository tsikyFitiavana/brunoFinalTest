import React, { Component } from 'react';
import axios from 'axios';

export default class Inscrire extends Component {
  constructor(props) {
    super(props);
    this.onChangenom = this.onChangenom.bind(this);
    this.onChangeprenom = this.onChangeprenom.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangetelephone = this.onChangephone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nom: '',
      prenom: '',
      email:'',
      phone:''
    }
  }
  onChangenom(e) {
    this.setState({
      nom: e.target.value
    });
  }
  onChangeprenom(e) {
    this.setState({
      prenom: e.target.value
    })  
  }
  onChangeemail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangetelephone(e) {
    this.setState({
      phone: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      nom: this.state.nom,
      prenom: this.state.prenom,
      phone: this.state.phone,
      email: this.state.email,
      
    };
    axios.post('http://localhost:8080/api/users/particulier/'+localStorage.getItem('ti'), obj)
        .then(res => console.log(res.data));
    
    this.setState({
      nom: '',
      prenom: '',
      email: '',
      phone:''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
           
            <form onSubmit={this.onSubmit}>
            <h3>Confirme votre inscription</h3>
                <center><div className="form-group">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Nom"
                      value={this.state.nom}
                      onChange={this.onChangenom}
                      />
                </div>
                <div className="form-group">
                    <input type="text" 
                      className="form-control"
                      placeholder="Prenom"
                      value={this.state.prenom}
                      onChange={this.onChangeprenom}
                      />
                </div>
                <div className="form-group">
                    <input type="text" 
                      className="form-control"
                      placeholder="Telephone"
                      value={this.state.phone}
                      onChange={this.onChangephone}
                      />
                </div>
                <div className="form-group">
                    <input type="email"
                      className="form-control"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.onChangeemail}
                      />
                </div>
               
                <div className="form-group">
                    <input type="submit"  value="S'incrire" className="btn btn-primary"/>
                </div></center>
            </form>
        </div>
    )
  }
}