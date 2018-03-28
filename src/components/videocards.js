import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import Details from './details'
class VideoCards extends Component {

      render() {
            const { match, location } = this.props
            const cards_page = (path) => {
                  if (path === '/videocards/easter'
                        || path === '/videocards/birthday'
                        || path === '/videocards/anniversary'
                        || path === '/videocards/get_well'
                        || path === '/videocards/wedding'
                        || path === '/videocards/valentines'
                        || path === '/videocards/christmas'
                        || path === '/videocards/easter') {
                        return <div className="row">
                              {this.props.videos.map((item, i) => {
                                    return (
                                          <div className="col-4 vidContainer">
                                                <video className="vid" controls ref={`video${i}`} src={item.source}></video>
                                                <button className="playButton" onClick={() => this.props.play(item.id, this.refs["video" + i])}><i className="fas fa-play"></i></button>
                                                <Link to={match.url + '/' + item.id}><p className="vidName">{item.name}</p>
                                                </Link>
                                          </div>
                                    )
                              })}
                        </div>
                  }
            }
            return (
                  <div>
                        {cards_page(location.pathname)}
                        <Switch>
                              <Route path={match.url + '/:id'} render={(props) => <Details play={this.props.play} submit={this.props.submit} current={this.props.current} cards={this.props.videos}{...props} />} />
                        </Switch>
                  </div>
            )
      }
}
export default VideoCards;