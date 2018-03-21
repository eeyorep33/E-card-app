# Project Proposal Outline

**E-Card website**:
An application where you choose a static image, add a text input field so you can add a personal message and then the app emails the link to the website for the person to view card and message.


**Core Features**:
-  A home page with links to different catagories of cards.
- A details page for each card that contains an input field to add a message and a place to enter the email address of both the sender and recipient.
- email service to send cards
- Server to load available images, send created cards to db, load sent card when link is clicked from email 
- Database to hold images and created cards.

**Stretch Features**: 
- Have video clip cards in addition to static cards.
- Add text inside the image in addition to the text input field
- Login that lets site retain cards sent by user


**User Stories**: The home page lists different catagories.  If a user wanted to send a birthday card, they would choose the birthday catagogy.  A filtered page of birthday cards would appear and the user could click on one to get a details page.  The details page has a text input field for emails and a place to type a message.  after the info is entered they would click a button that emails the recipient a link to view the card.

**Tech-Stack**: 

- Create React app
- Express
- body-parser
- postgres
- knex
- bookshelf
- axios
- react-router-dom
- dotenv
- emailjs


**Description of Data**:
- The app will access the cards and possibly video clips stored in the database.
- The card created needs to be saved to the database so the link is valid and the recipient can view the card.  
- Data model for images{id: assigned by datsbase, name:'', source:'' catagory:''}
- Data model for completed cards{id: assigned by database, source:'', msg:'', recipient email:'' senders name:'' }
                       

## Front-End: 
 - Home page
 - Catagories page
 - Details page

## Server-side:
 - GET endpoint to request cards from database.
 - POST endpoint for created cards
 - GET endpoint by id, for link to view sent cards
 - endpoint for email
 
 

**Project Timeline** -
1. Will work on components and front end functionality first(2 days). 
2. Enter test data to make sure routes and link function properly.  Add server with endpoints to database next.(2 days)
3. add data to database and make sure it is accessible to front end. (3 days)
4. Make sure cards created are stored in a way that makes the link to the webpage valid and viewable.  Set up email endpoints.(3 days)