import React, { Component } from 'react';
class Details extends Component {
      findId = (i) => {
            let index = this.props.cards.findIndex((e) => { return e.id === i });
            let ending=this.props.cards[index].source.substr(this.props.cards[index].source.length-3,3)
            console.log(ending)
            if(ending==="mp4"){
                  return <div>
                        <video controls src={this.props.cards[index].source}></video>
                  </div>
            }
            
            else{return <div className="imgDiv" >
                  <img className="imgDetails" src={this.props.cards[index].source} /></div>}
                 return   <form onSubmit={(e) => this.props.submit(e, i)} className="labelDisplay">
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
           
      }
      render() {
            const { match, location } = this.props
            let param = parseInt(this.props.match.params.id)
            
            return (
                  <div> {this.findId(param)}
                 
                  </div>
            )
      }
}
export default Details