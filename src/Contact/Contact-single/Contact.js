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

    console.log('change');
    this.setState({
      user: Object.assign(this.state.user, {
        favorite: !this.state.user.favorite
      })
    }, () => {
      console.log('123123', this.state);
    });
  };

  render() {

    const user = this.state.user;

    return (
        <div className="contact box">
          <img src={user.picture.medium}/>
          <p>Hi, meet <b>{user.name.first.toLocaleUpperCase()}</b> :)</p>
          <p>Call them: <b>{user.phone}</b> or <b>{user.cell}</b></p>
          <p>Email them: <b>{user.email}</b></p>
          <p>Make a surprise party here: <b>{user.location.street}</b></p>
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