import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Cards from './cards_page';
class Home extends Component {
      noUsername = (username, path) => {
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
                  if (path === '/') {
                        return (<div>
                              <h2 className="username">Welcome {this.props.username}</h2>
                              <img className="banner" src="images/spring_text.jpg" />
                              <h1 className="featured">Featured Cards</h1>
                              <div className="featuredDiv"></div>
                              {this.props.inventory.filter((item) => { return item.id % 9 === 0 }).map((item) =>
                                    (<div className="row divRow">
                                          <div className="col-4 ">
                                                <img className="cards img-responsive" src={item.source} />
                                                <Link to={"/cards/" + item.catagory + "/" + item.id} ><p className="name">{item.name}</p></Link>
                                          </div>
                                    </div>))}
                        </div>)
                  }
            }
      }
      // }
      render() {
            const { match, location } = this.props
            return (
                  <div className="container-fluid">
                        {this.noUsername(this.props.username, location.pathname)}
                  </div>
            )
      }
}
export default Home