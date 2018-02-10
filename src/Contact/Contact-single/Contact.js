import React from 'react';
import './Contact.css';

class Contact extends React.Component {

  constructor(props) {
    super(props);
    const user = this.props.user;

    this.state = {
      user
    };
  }

  changeFavorite() {
    this.setState({
      user: Object.assign(this.state.user, {
        favorite: !this.state.user.favorite
      })
    }, () => {
      //
    });
  };

  render() {

    const user = this.state.user;

    return (
        <div className="contact box">
          <div className="d-flex a-items-start">
            <img src={user.picture.medium}/>
            <div style={{
              flex: '1 1 auto',
              textAlign: 'right'
            }}>
              <h3 style={{
                margin: 0
              }}>{user.name.first.toLocaleUpperCase()}</h3>
              <p><b>{user.phone}</b></p>
            </div>
          </div>
          <p><b>{user.email}</b></p>
          <p className="tags">{user.tags.map((tag) => {
            return <b key={tag}>#{tag} </b>
          })}
          </p>
          <input id="is-favorite"
                 type="checkbox"
                 checked={user.favorite}
                 onChange={this.changeFavorite.bind(this)}/>
          <label htmlFor="is-favorite">Is favourite</label>
        </div>
    )
  }
}

export default Contact;