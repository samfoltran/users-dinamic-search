import React from 'react';

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
} export default User;