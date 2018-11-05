import React, { Component } from 'react';

class FilmList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      poster: '',
      comment: '',      
    };
  this.onChange = this.onChange.bind(this);  
  this.submitForm = this.submitForm.bind(this);  
  }

  onChange(e) {
    console.log(e.target.value);
    this.setState({
      [e.target.id] : e.target.value,
    })
  }

  resetForm(){
    this.setState({
      name: '',
      poster: '',
      comment: '',
    })
  }

  addFilm() {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
     };
     const url = "http://92.175.11.66:3001/api/quests/movies/";
     fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Film ajouté avec l'ID ${res}!`);
          this.resetForm();
        }
      }).catch(e => {
        console.error(e);
        alert('Erreur lors de l\'ajout d\'u film');
      }); 
  }

  submitForm(e) {
    e.preventDefault();
    this.addFilm();
   }  
  //  ^((http[s]?):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)
   render(){
    //  const regex = "^((http[s]?):\/)?\/?([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}(\/[\w|-]*)*\.[a-z]+";
     return(
      <div className="FormFilm">
        <h1>FILM</h1>
      
        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>FILM INFORMATIONS</legend>
            <div className="form-data">
              <label htmlFor="name">Film Title</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={this.onChange}
                value={this.state.name}
              />
            </div>
      
            <div className="form-data">
              <label htmlFor="poster">Url Poster</label>
              <input
                type="text"
                id="poster"
                name="poster"
                // pattern="^((http[s]?):\/)?\/?([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}(\/[\w|-]*)*\.[a-zA-Z0-9_&=\?]+"
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>
      
            <div className="form-data">
              <label htmlFor="comment">Comments</label>
              <textarea
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment}
              >
              </textarea>
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
     );
   }
}

export default FilmList;