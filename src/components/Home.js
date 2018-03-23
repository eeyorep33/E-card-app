import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Cards from './cards_page';
class Home extends Component {
      noUsername = (username) => {
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
                        <h2 className="username">Welcome {this.props.username}</h2>
                        <img className="banner"src="images/spring_text.jpg" />
                  </div>
            }
      }
      render() {
            return (
                  <div className="container-fluid">
                        {this.noUsername(this.props.username)}
                  </div>
            )
      }
}
export default Home