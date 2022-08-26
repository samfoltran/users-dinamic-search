import React from 'react';
import ReactDOM from 'react-dom/client';
import './usersDatabase.js';
import './index.css';

const usersDatabase = [
  {
    name: "Jackson",
    age: 25,
    picture: "pictures/jackson.png"
  },
  {
    name: "Jose",
    age: 25,
    picture: "pictures/jose.png"
  },
  {
    name: "Theo",
    age: 25,
    picture: "pictures/theo.png"
  },

  {
    name: "Julia",
    age: 25,
    picture: "pictures/julia.png"
  },
  {
    name: "Maria",
    age: 25,
    picture: "pictures/maria.png"
  },
  {
    name: "Rebeca",
    age: 25,
    picture: "pictures/rebeca.png"
  },
];

class User extends React.Component{
  render(){
    return (
      <div className="user">
        <img src={this.props.user.picture} />
        <div className='user-data'>
          <h2>{this.props.user.name}</h2>
          <p>{this.props.user.age} Years Old</p>
          <div className="clear"/>
        </div>
        <div className="clear"/>
      </div>
    );
  }
}

class UsersListWithSearch extends React.Component{

  user(user){
    return <User key={user.name} user={user} />
  }

  constructor(props){
    super(props);

    const users = usersDatabase.map(
      (user) => {
        return this.user(user);
      }
    );

    this.state = {
      users: users
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    const searchString = e.target.value.toLowerCase();

    let users = [];

    if(!searchString == ''){
      users = usersDatabase.map(
        (user) => {
          if(user.name.toLowerCase().match(searchString)){
            return this.user(user);
          }
        },
        searchString
      );
    } else {
      users = usersDatabase.map(
        (user) => {
          return this.user(user);
        }
      );
    }

    this.setState({ users: users });
  }

  render(){
    return(
      <div id="search">
        <input
          type="text"
          id="search-input"
          onChange={this.handleChange}
          placeholder="Digite um nome para pesquisar"
        />
        <div id="users-list">
          {this.state.users}
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UsersListWithSearch />
);