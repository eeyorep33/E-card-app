import React, { Component } from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Cards from './components/cards_page'
import Home from './components/Home'
import SentCards from './components/sentCards'
import VideoCards from './components/videocards'

class App extends Component {
  constructor() {
    super();
    this.state = {
      card_items: [],
      username: "",
      email: "",
      videocards: [],
      status:false
    }
  }
  componentWillMount() {
    let name = localStorage.getItem("username")
    let email = localStorage.getItem("email")
    this.setState({ username: name, email: email });
    axios.get('/cards')
      .then(res => {
        this.setState({
          card_items: res.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
    axios.get('/animatedcards')
      .then(res => {
        this.setState({
          videocards: res.data
        })

      })
      .catch((error) => {
        console.log(error)
      })
  }
  play = (id, ref) => {
if(this.state.status===false){
  this.setState({status:true}, ()=>{ref.play()}) 
}
else if(this.state.status===true){
  this.setState({status:false}, ()=>{ref.pause()})
}
   
       

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
  filterVideos = (cat) => {
    let cardList = []
    cardList = this.state.videocards.filter((el) => {
      return el.catagory === cat;
    })
    return cardList
  }
  handleSubmit = (e, index, source) => {
    e.preventDefault()
    let sendername = e.target.senderName.value
    let senderemail = e.target.senderEmail.value
    let recipientname = e.target.recipientName.value
    let recipientemail = e.target.recipientEmail.value
    let message = e.target.message.value
    let newCard = {
      senderName: sendername, senderEmail: senderemail,
      recipientName: recipientname, recipientEmail: recipientemail, source: source, message: message
    }
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
            <p className="vidNav">Video Cards</p>
            <div></div>
            <ul className="listItems">
              <li><button className="listButton"> <Link className="menuLinks" to="/videocards/birthday">Birthday</Link></button></li>
              <li><button className="listButton"> <Link className="menuLinks" to="/videocards/christmas">Christmas</Link></button></li>
              <li><button className="listButton"> <Link className="menuLinks" to="/videocards/valentines">Valentines</Link></button></li>
              <li><button className="listButton"> <Link className="menuLinks" to="/videocards/easter">Easter</Link></button></li>
              <li><button className="listButton"> <Link className="menuLinks" to="/videocards/get_well">Get Well</Link></button></li>
              <li><button className="listButton"> <Link className="menuLinks" to="/videocards/anniversary">Anniversary</Link></button></li>
              <li><button className="listButton"> <Link className="menuLinks" to="/videocards/wedding">Wedding</Link></button></li>
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
              <Route path="/videocards/birthday" render={(props) => <VideoCards
                play={this.play}
                current={this.state.current}
                submit={this.handleSubmit}
                inventory={this.state.videocards}
                videos={this.filterVideos('birthday')}
                {...props} />} />
              <Route path="/videocards/christmas" render={(props) => <VideoCards
                play={this.play}
                current={this.state.current}
                submit={this.handleSubmit}
                inventory={this.state.videocards}
                videos={this.filterVideos('christmas')}
                {...props} />} />
              <Route path="/videocards/valentines" render={(props) => <VideoCards
                play={this.play}
                current={this.state.current}
                submit={this.handleSubmit}
                inventory={this.state.videocards}
                videos={this.filterVideos('valentines')}
                {...props} />} />
              <Route path="/videocards/easter" render={(props) => <VideoCards
                play={this.play}
                current={this.state.current}
                submit={this.handleSubmit}
                inventory={this.state.videocards}
                videos={this.filterVideos('easter')}
                {...props} />} />
              <Route path="/videocards/get_well" render={(props) => <VideoCards
                play={this.play}
                current={this.state.current}
                submit={this.handleSubmit}
                inventory={this.state.videocards}
                videos={this.filterVideos('get_well')}
                {...props} />} />
              <Route path="/videocards/anniversary" render={(props) => <VideoCards
                play={this.play}
                current={this.state.current}
                submit={this.handleSubmit}
                inventory={this.state.videocards}
                videos={this.filterVideos('anniversary')}
                {...props} />} />
              <Route path="/videocards/wedding" render={(props) => <VideoCards
                play={this.play}
                current={this.state.current}
                submit={this.handleSubmit}
                inventory={this.state.videocards}
                videos={this.filterVideos('wedding')}
                {...props} />} />
              <Route path="/createdCards/find/:id" render={(props) => <SentCards
                sentCards={this.state.createdCards} play={this.play}{...props} />} />
            </Switch>
          </section>
        </article>
        <div></div>
      </div>
    );
  }
}
export default App;