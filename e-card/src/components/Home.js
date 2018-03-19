import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Cards from './cards_page';
class Home extends Component {
      render() {
            return (
                  <div className="container-fluid">
                        <h1 className="title">Evelyn's E-Cards</h1>
                        <nav>
                              <button> <Link to="/">Home</Link></button>
                        </nav>
                        <div className="row">
                              <div className="col-lg-3">
                                    <ul>
                                          <li> <Link to="/cards/birthday">Birthday</Link></li>
                                          <li> <Link to="/cards/christmas">Christmas</Link></li>
                                          <li> <Link to="/cards/valentines">Valentines</Link></li>
                                          <li> <Link to="/cards/easter">Easter</Link></li>
                                          <li> <Link to="/cards/get_well">Get Well</Link></li>
                                          <li> <Link to="/cards/anniversary">Anniversary</Link></li>
                                          <li> <Link to="/cards/wedding">Wedding</Link></li>

                                    </ul>
                                    
                              </div>

                        </div>


                  </div>
            )
      }
}
export default Home