import React from 'react';
import ContactList from './Contact/Contact-list/ContactList';
import "./App.css";

import * as users from './mockUsers';
import {searchInProperties} from './utils/search.service';
import {SortIcon} from './SortIcon/SortIcon';

const Sorting = {
  UP: 0,
  DOWN: 1
};


class App extends React.Component {

  constructor() {
    //
    super();

    this.state = {
      query: '',
      users: users,
      sorting: Sorting.UP
    }
  }

  search(event) {

    const query = event.target.value;

    const updatedUsers = users.filter((u) => {
      return searchInProperties(u, query)
    });

    this.setState({
      query,
      users: updatedUsers
    });
  }

  changeSorting() {

    const newSorting = this.state.sorting === 1 ? 0 : this.state.sorting + 1;

    this.setState(
        {
          sorting: newSorting,
          users: this.sortUsers(this.state.users, newSorting)
        }
    );
  }

  sortUsers(users, sorting) {

    return users.sort((a, b) => {
      const compare = a.name.first < b.name.first ? -1 : 1;

      if (sorting === Sorting.DOWN) {
        return compare * -1;
      }

      return compare;
    });
  }

  render() {

    const {query, users} = this.state;

    return (
        <div>
          <input value={query} onChange={this.search.bind(this)}/>
          <SortIcon onChangeSorting={this.changeSorting.bind(this)}/>
          <div className="app">
            <ContactList users={users}/>
            <ContactList title="Favorites"
                         users={users.filter((u) => u.favorite)}/>
          </div>
        </div>
    )
  }

}

export default App;