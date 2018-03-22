import React, { Component } from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Cards from './components/cards_page'
import Home from './components/Home'
import SentCards from './components/sentCards'

class App extends Component {
  constructor() {
    super();
    this.state = {
      card_items: [],
      username: '',
      email: ''
    }
  }
  componentDidMount() {
    let name = localStorage.getItem("userName")
    let email = localStorage.getItem("email")
    this.setState({ userName: name, email: email });
    axios.get('/cards')
      .then(res => {
        this.setState({
          card_items: res.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  createUser = (e) => {
    e.preventDefault()
    let user = e.target.username.value;
    let email = e.target.email.value;
    this.setState({ username: user, email: email })
    localStorage.setItem("username", e.target.username.value)
    localStorage.setItem("email", e.target.email.value)
    e.target.username.value = "";
    e.target.email.value = "";
  }
  filterItems = (cat) => {
    let cardList = []
    cardList = this.state.card_items.filter((el) => {
      return el.catagory === cat;
    })
    return cardList
  }
  handleSubmit = (e, index) => {
    console.log(index)
    e.preventDefault()
    let sendername = e.target.senderName.value
    let senderemail = e.target.senderEmail.value
    let recipientname = e.target.recipientName.value
    let recipientemail = e.target.recipientEmail.value
    let source = this.state.card_items.filter((el) => {
      return el.id === index
    })[0]
    console.log(source)
    let message = e.target.message.value
    let newCard = {
      senderName: sendername, senderEmail: senderemail,
      recipientName: recipientname, recipientEmail: recipientemail, source: source.source, message: message
    }
    console.log(newCard)
    axios.post('/createdCards', newCard)
      .then((res) => {
        this.setState({ createdCards: res.data })
      })
      .catch((error) => {
        console.log("error")
      })
    e.target.senderName.value = ''
    e.target.senderEmail.value = ''
    e.target.recipientName.value = ''
    e.target.recipientEmail.value = ''
    e.target.message.value = ''
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
              <li><button className="listButton"> <Link className="menuLinks" to="/cards/birthday">Birthday</Link></button></li>
              <li><button className="listButton"> <Link className="menuLinks" to="/cards/christmas">Christmas</Link></button></li>
              <li><button className="listButton"> <Link className="menuLinks" to="/cards/valentines">Valentines</Link></button></li>
              <li><button className="listButton"> <Link className="menuLinks" to="/cards/easter">Easter</Link></button></li>
              <li><button className="listButton"> <Link className="menuLinks" to="/cards/get_well">Get Well</Link></button></li>
              <li><button className="listButton"> <Link className="menuLinks" to="/cards/anniversary">Anniversary</Link></button></li>
              <li><button className="listButton"> <Link className="menuLinks" to="/cards/wedding">Wedding</Link></button></li>
            </ul>
          </aside>
          <section className="divRow secDiv">
            <Switch>
              <Route path="/" exact render={(props) => <Home
                submit={this.handleSubmit}
                createUser={this.createUser}
                username={this.state.username}
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
              <Route path="/createdCards/:id" render={(props) => <SentCards
                sentCards={this.state.createdCards}{...props} />} />
            </Switch>
          </section>
        </article>
      </div>
    );
  }
}

export default App;

