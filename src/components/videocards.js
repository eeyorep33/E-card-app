import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import Details from './details'
class VideoCards extends Component {
      render() {
            const { match, location } = this.props
            const cards_page = (path) => {
                  if (path === '/cards/easter'
                        || path === '/videocards/birthday'
                        || path === '/videocards/anniversary'
                        || path === '/videocards/get_well'
                        || path === '/videocards/wedding'
                        || path === '/videocards/valentines'
                        || path === '/videocards/christmas'
                        || path === '/videocards/easter') {
                        return <div>
                              {this.props.cards.map((item, i) =>{
                           
                                    return (<div className="row divRow">
                                          <div className="col-4 ">                                               
                                                <video controls src={item.source}></video>
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
export default VideoCards;