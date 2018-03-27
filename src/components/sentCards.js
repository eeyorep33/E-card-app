import React, { Component } from 'react';
import axios from 'axios'

class SentCards extends Component {
      constructor() {
            super();
            this.state = {
                  sentCard: ''
            }
      }
      findCard = (id) => {
            axios.get('/createdCards/' + id)
                  .then(res => {
                        this.setState({ sentCard: res.data })
                        console.log(res.data)
                  })
                  .catch((error) => {
                        console.log(error)
                  })
            let ending = this.state.sentCard.source.substr(this.state.sentCard.source.length - 3, 3)
            if (ending === "mp4") {
                  return <video className="" src={this.state.sentCard.source}></video>
            }
            else {
                  return <img className="imgDetails" src={this.state.sentCard.source} />
            }


      }
      render() {
            const { match, location } = this.props
            let param = parseInt(this.props.match.params.id)
            return (
                  <div className="vidContainer">
                        {this.findCard(param)}
                        <p className="message">{this.state.sentCard.message}</p>
                  </div>
            )
      }
}
export default SentCards