import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import Details from './details'
class Cards extends Component {
      render() {
            const { match, location } = this.props
            const cards_page = (path) => {
                  if (path === '/cards/easter'
                        || path === '/cards/birthday'
                        || path === '/cards/anniversary'
                        || path === '/cards/get_well'
                        || path === '/cards/wedding'
                        || path === '/cards/valentines'
                        || path === '/cards/christmas'
                        || path === '/cards/easter') {
                        return <div>
                              {this.props.cards.map((item, i) =>{
                           
                                    return (<div>
                                          <div className="col-lg-4 col-sm-12 ">                                               
                                                <img className="cards img-responsive" src={item.source} />
                                                <Link to={match.url + '/' + item.id}><p className="name">{item.name}</p>
                                                </Link>
                                          </div>
                                    </div>)})}
                        </div>
                  }
            }
            return (
                  <div>
                        {cards_page(location.pathname)}
                        <Switch>
                              <Route path={match.url + '/:id'} render={(props) => <Details submit={this.props.submit} cards={this.props.cards}{...props} />} />
                        </Switch>
                  </div>
            )
      }
}
export default Cards;