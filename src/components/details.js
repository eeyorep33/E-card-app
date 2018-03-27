import React, { Component } from 'react';
class Details extends Component {
      findId = (i) => {
            let ending = this.props.cards[i].source.substr(this.props.cards[i].source.length - 3, 3)
            if (ending === "mp4") {
                  return <div className="vidContainer"><video className="displayVid" controls ref={`specVideo`} src={this.props.cards[i].source}></video>
                        <button className="displayPlay" onClick={() => this.props.play(i, this.refs.specVideo)}><i className="fas fa-play"></i></button>
                  </div>
            }
            else { return <img className="imgDetails" src={this.props.cards[i].source} /> }
           
      }
      render() {
            const { match, location } = this.props
            let param = parseInt(this.props.match.params.id)
            let index = this.props.cards.findIndex((e) => { return e.id === param });
            return (
                  <div className="imgDiv">
                        {this.findId(index)}
                        <form onSubmit={(e) => this.props.submit(e, param, this.props.cards[index].source)} className="labelDisplay">
                              <label>Sender's Name</label>
                              <input className="inputDisplay" name="senderName" type="text" />
                              <label>Sender's Email</label>
                              <input className="inputDisplay" name="senderEmail" type="email" />
                              <label>Recipients Name</label>
                              <input className="inputDisplay" name="recipientName" type="text" />
                              <label>Recipient's Email</label>
                              <input className="inputDisplay" name="recipientEmail" type="email" />
                              <label>Type your message here</label>
                              <textarea className="msgArea inputDisplay" name="message"></textarea>
                              <button className="btn submitButton" type="submit">Send Card</button>
                        </form>
                  </div>
            )
      }
}
export default Details