import React, { Component } from 'react';
class Details extends Component {
      findId = (i) => {
           
            let index = this.props.cards.findIndex((e) => { return e.id === i });
            let ending=this.props.cards[index].source.substr(this.props.cards[index].source.length-3,3)
                       if(ending==="mp4"){
                  return <div className="vidContainer"><video  controls ref={(video) => { this.videoPlay = video }} src={this.props.cards[index].source}></video>
                  <button className="playButton" onClick={() => this.props.play(i,this.videoPlay)}><i className="fas fa-play"></i></button>
                  </div>
            }
            
            else{return    <img className="imgDetails" src={this.props.cards[index].source} />}
                   
           
      }
      render() {
            const { match, location } = this.props
            let param = parseInt(this.props.match.params.id)
            
            return (
                  <div className="imgDiv"> 
                  {this.findId(param)}
                  <form onSubmit={(e) => this.props.submit(e, param)} className="labelDisplay">
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