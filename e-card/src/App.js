import React, { Component } from 'react';
import './App.css';
import {Link, Switch, Route} from 'react-router-dom'
import Cards from './components/cards_page'
import Home from'./components/Home'
import card_items from './components/test_data'

class App extends Component {
 
  constructor(){
    super();
    this.state={
      card_items: card_items
    }
  }
   filterItems=(cat)=>{
     console.log(cat)
     let cardList=[]
      cardList=this.state.card_items.filter((el)=>{
  return el.catagory===cat;   
})
console.log(cardList)
return cardList
   }
  
  render() {
       return (
      <div>
      
<Switch>
<Route path="/"exact render={(props)=> <Home 
{...props} />} />}
<Route path="/cards/birthday"  render={(props)=> <Cards 
cards={this.filterItems('birthday')}
{...props} />} />
<Route path ="/cards/christmas"  render={(props)=> <Cards 
cards={this.filterItems('christmas')}
{...props} />} />
<Route path ="/cards/valentines"  render={(props)=> <Cards 
cards={this.filterItems('valentines')}
{...props} />} />
<Route path ="/cards/easter"  render={(props)=> <Cards
cards={this.filterItems('easter')} 
{...props} />} />
<Route path ="/cards/get_well"  render={(props)=> <Cards
cards={this.filterItems('get_well')} 
{...props} />} />
<Route path ="/cards/anniversary"  render={(props)=> <Cards 
cards={this.filterItems('anniversary')}
{...props} />} />
<Route path ="/cards/wedding"  render={(props)=> <Cards 
cards={this.filterItems('wedding')}
{...props} />} />
  </Switch>
        
      </div>
    );
  }
}

export default App;
