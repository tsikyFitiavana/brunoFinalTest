import React from 'react';
import { Link } from "react-router-dom";

class EditAtelier extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      titre: '',
      description: '',
      date: '',
      utilisateur:'',
      debut: '',
      duree: '',
      place: '',
      placeRes: '',
      prix: '',
      image: '',
    }
    this.onChange = this.onChange.bind(this)
    this.handleUploadImage = this.handleUploadImage.bind(this);
}

onChange(event) {
  this.setState({
    [event.target.name]: event.target.value
  })
}
handleUploadImage(ev) {
  ev.preventDefault();

  const data = new FormData();
  data.append('image', this.uploadInput.files[0]);
  data.append('titre', this.state.titre);
  data.append('description', this.state.description);
  data.append('date', this.state.date);
  data.append('debut', this.state.debut);
  data.append('duree', this.state.duree);
  data.append('place', this.state.place);
  data.append('idUser', localStorage.id);
  data.append('placeRes', this.state.placeRes);
  data.append('prix', this.state.prix);

  fetch('http://localhost:8080/api/users/putArticle/'+ this.props.match.params.id, {
    method: 'PUT',
    body: data,
  }).then((response) => {
      console.log('ity n response ' + response);
      console.log('this.props.match.params.id '+this.props.match.params.id);
      
      
    response.json().then((body) => {
      this.setState({ image: `http://localhost:8080/api/users/newArticle/${body.image}` });
      console.log('ity ilay body.image', body.image);

    });
  });
}

  render() {
    return (
      <div className="container-fluid">
        <form onSubmit={this.handleUploadImage} className="md-form">
          <div className="form-group mx-sm-3 mb-2 container">
          <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="titre" placeholder="Titre" />
                    <br/>
                    <br />
              <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="description" placeholder="Description" />
            <br />
            <br />
              <input className="form-control" type="date"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="date" placeholder="Date" />
              <br />
            <br />
                <input className="form-control" type="time"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="debut" placeholder="Heure du debut" />

           
            <br />
              <input className="form-control" type="time"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="duree" placeholder="Durée " />
              <br />
                <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="place" placeholder="Places disponible" />
              
            <br/>
              <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="placeRes" placeholder="Places reserver " />
              <br/>
                <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="prix" placeholder="Prix" />
              
            <br />
            
            <div className="row">
            <input ref={(ref) => { this.uploadInput = ref; }} type="file" name="image" />
                <button id="validate" className="btn btn-info">Publier</button>
                <Link to="/dashboard" className="btn-flat waves-effect">
              dashboard
          </Link>
                
                
              
            </div>
            
            
          </div>

        </form>
      </div>

    );
  }
}

export default EditAtelier;