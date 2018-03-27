import React, { Component } from 'react';
import axios from 'axios'

class SentCards extends Component {
      constructor() {
            super();
            this.state = {
                  sentCard: '',
                  loaded:false
            }
      }
      findCard = (id) => {
            axios.get('/createdCards/' + id)
                  .then(res => {
                        this.setState({ sentCard: res.data, loaded:true })
                        console.log(res.data)
                  })
                  .catch((error) => {
                        console.log(error)
                  })
            }
            renderCard=()=>{
                  let ending = this.state.sentCard.source.substr(this.state.sentCard.source.length - 3, 3)
            if (ending === "mp4") {
                  return<div><video className="" ref={`specVideo`} src={this.state.sentCard.source}></video>
                  <button className="playButton" onClick={() => this.props.play(i,this.refs.specVideo)}><i className="fas fa-play"></i></button>
                  </div>
            }
            else {
                  return <img className="imgDetails" src={this.state.sentCard.source} />
            }
      }

    
      render() {
            const { match, location } = this.props
            let param = parseInt(this.props.match.params.id)
            this.findCard(param)
            return (
                  <div className="vidContainer">
                       {this.state.loaded && this.renderCard()}
                        <p className="message">{this.state.sentCard.message}</p>
                  </div>
            )
      }
}
export default SentCards