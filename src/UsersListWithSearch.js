import React from 'react';
import User from './User.js';

import usersDatabase from './users.json';

class UsersListWithSearch extends React.Component{

    user(user){
        return <User key={user.name} user={user} />
    }
  
    constructor(props){
        super(props);
  
        const users = usersDatabase.users.map(
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
            users = usersDatabase.users.map(
                (user) => {
                    if(user.name.toLowerCase().match(searchString)){
                    return this.user(user);
                    }
                },
                searchString
            );
        } else {
            users = usersDatabase.users.map(
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

export default UsersListWithSearch;