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
            return <div>
                  {console.log("hello")}
                  <img className="imgDetails" src={this.state.sentCard.source} />
                  <p className="message">{this.state.sentCard.message}</p>
                  <span>hello</span>
            </div>
      }
      render() {
            const { match, location } = this.props
            let param = parseInt(this.props.match.params.id)
            return (
                  <div>
                        {this.findCard(param)}
                  </div>
            )
      }
}
export default SentCards