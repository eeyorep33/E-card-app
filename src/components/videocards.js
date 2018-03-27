import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import Details from './details'
class VideoCards extends Component {
      play = () => {
            this.videoPlay.play()}
           
     
      render() {
            const { match, location } = this.props
            const cards_page = (path) => {
                  console.log(this.props.cards)
                  if (path === '/videocards/easter'
                        || path === '/videocards/birthday'
                        || path === '/videocards/anniversary'
                        || path === '/videocards/get_well'
                        || path === '/videocards/wedding'
                        || path === '/videocards/valentines'
                        || path === '/videocards/christmas'
                        || path === '/videocards/easter') {
                        return <div className="row">
                              {this.props.cards.map((item, i) =>{
                           
                                    return (
                                          <div className="col-4 vidContainer">                                               
                                                <video  className="vid"controls ref={(video) => { this.videoPlay = video }} src={item.source}></video>
                                                <button className="playButton"onClick={()=>this.play()}><i className="fas fa-play"></i></button>
                                                <Link to={match.url + '/' + item.id}><p className="name">{item.name}</p>
                                                </Link>
                                          </div>
                                   )})}
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