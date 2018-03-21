import React, { Component } from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Cards from './components/cards_page'
import Home from './components/Home'


class App extends Component {

  constructor() {
    super();
    this.state = {
      card_items:[],
      createdCards:[]
    }
  }
  componentDidMount(){
    axios.get('http://localhost:8080/cards')
    .then(res => { 
             this.setState({
        card_items: res.data
      })      
    })
    .catch((error) => {
            console.log(error)
    })
  }
  filterItems = (cat) => {
    let cardList = []
    cardList = this.state.card_items.filter((el) => {
      return el.catagory === cat;
    })
    return cardList
  }
  handleSubmit=(e)=>{
e.preventDefault()
 let sendername=e.target.senderName.value
let senderemail=e.target.senderEmail.value
let recipientname=e.target.recipientName.value
let recipientemail=e.target.recipientEmail.value
let message=e.target.message.value
let newCard={ sendername:sendername, senderEmail:senderemail,
 recipientName: recipientname, recipientEmail: recipientemail, message:message}  
 axios.post('http://localhost:8080/createCard', newCard)
      .then((res) => {
        this.setState({ createdCards: res.data })
      })
      .catch((error) => {
        console.log("error")
      }) 
e.target.senderName.value=''
e.target.senderEmail.value=''
e.target.recipientName.value=''
e.target.recipientEmail.value=''
e.target.message.value=''
  }
  render() {
    return (
      <div className="container-fluid">
      
        <h1 className="title">Evelyn's E-Cards</h1>
        <div className="navBar">
          <button className="btn homeButton"> <Link className="navLinks" to="/">Home</Link></button>
        </div>
      <article>
        <aside className="menuDiv">
          <ul className='listItems'>
            <li><button className="listButton"> <Link className="menuLinks"to="/cards/birthday">Birthday</Link></button></li>
            <li><button className="listButton"> <Link className="menuLinks"to="/cards/christmas">Christmas</Link></button></li>
            <li><button className="listButton"> <Link className="menuLinks"to="/cards/valentines">Valentines</Link></button></li>
            <li><button className="listButton"> <Link className="menuLinks"to="/cards/easter">Easter</Link></button></li>
            <li><button className="listButton"> <Link className="menuLinks"to="/cards/get_well">Get Well</Link></button></li>
            <li><button className="listButton"> <Link className="menuLinks"to="/cards/anniversary">Anniversary</Link></button></li>
            <li><button className="listButton"> <Link className="menuLinks"to="/cards/wedding">Wedding</Link></button></li>
          </ul>
        </aside>
        <section className="divRow secDiv">
        <Switch>
          <Route path="/" exact render={(props) => <Home
          submit={this.handleSubmit}
          inventory={this.state.card_items}
            {...props} />} />}
          <Route path="/cards/birthday" render={(props) => <Cards
          submit={this.handleSubmit}
          inventory={this.state.card_items}
            cards={this.filterItems('birthday')}
            {...props} />} />
          <Route path="/cards/christmas" render={(props) => <Cards
          submit={this.handleSubmit}
          inventory={this.state.card_items}
            cards={this.filterItems('christmas')}
            {...props} />} />
          <Route path="/cards/valentines" render={(props) => <Cards
          submit={this.handleSubmit}
          inventory={this.state.card_items}
            cards={this.filterItems('valentines')}
            {...props} />} />
          <Route path="/cards/easter" render={(props) => <Cards
          submit={this.handleSubmit}
          inventory={this.state.card_items}
            cards={this.filterItems('easter')}
            {...props} />} />
          <Route path="/cards/get_well" render={(props) => <Cards
          submit={this.handleSubmit}
          inventory={this.state.card_items}
            cards={this.filterItems('get_well')}
            {...props} />} />
          <Route path="/cards/anniversary" render={(props) => <Cards
          submit={this.handleSubmit}
          inventory={this.state.card_items}
            cards={this.filterItems('anniversary')}
            {...props} />} />
          <Route path="/cards/wedding" render={(props) => <Cards
          submit={this.handleSubmit}
          inventory={this.state.card_items}
            cards={this.filterItems('wedding')}
            {...props} />} />
        </Switch>
        </section>
        </article>
      </div>
    );
  }
}

export default App;

