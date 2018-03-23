import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Cards from './cards_page';
const { match, location } = this.props
class Home extends Component {
      noUsername = (username) => {
            console.log(this.props.inventory)
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
                        <h1 className="featured">Featured Cards</h1>
                        <div className="featuredDiv"></div>
                                                {this.props.inventory.map((item)=>{
                             (<div className="row divRow">
                             <div className="col-4 ">                                                                      
                                   <img className="cards img-responsive" src={item.source} />
                                  
                             </div>
                       </div>)})}
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