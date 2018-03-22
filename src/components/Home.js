import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Cards from './cards_page';
class Home extends Component {
      noUsername = (username) => {
            console.log(username)
            if (!username) {
                  return <form onSubmit={this.props.createUser} className="labelDisplay">
                        <label>Username</label>
                        <input className="inputDisplay" type="text" name="username" />
                        <label>Email</label>
                        <input className="inputDisplay" type="email" name="email" />
                        <button className="btn submitButton" type="submit">Submit</button>
                  </form>
            }
            else {
                  return <div>
                        <p>Welcome {username}</p>
                  </div>
            }
      }
      render() {
            return (
                  <div className="container-fluid">
                        <h1 className="title">Send free E-cards</h1>
                        {this.noUsername(this.props.username)}
                  </div>
            )
      }
}
export default Home