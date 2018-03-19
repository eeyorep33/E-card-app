import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Cards extends Component{     
      render(){
            const { match, location } = this.props
            console.log(this.props)
            console.log(match)
            console.log(location)
                      
            const cards_page=(path)=>{
if(path=== '/cards/easter'
 ||path=== '/cards/birthday' 
|| path==='/cards/anniversary' 
|| path==='/cards/get_well' 
|| path==='/cards/wedding' 
|| path==='/cards/valentines' 
|| path==='/cards/christmas'
|| path==='/cards/easter') {
      return  <div className="container-fluid">
      <div className="row">
      {this.props.cards.map((item, i)=>
     
       <div className="col-lg-3">
       <img className="cards" src={item.source}/>
       <p>{item.name}</p>

       </div>)}
           
      </div>
</div>
}
            }
            return(<div>
                {cards_page(location.pathname)}
                </div>
            )
      }
}
export default Cards;