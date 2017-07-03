import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import {
  PageHeader,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';
import { invokeApig } from '../libs/awsLib';
import './Home.css';

// Home page - signin/signup features
// If you did not signout, there will be a cookie
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      notes: [],
    };
  }
  
  async componentDidMount() {
    // The userToken will return bull if login session fail 
    if (this.props.userToken === null) {
      return;
    }

    this.setState({ isLoading: true });

    try {
      const results = await this.notes();
      this.setState({ notes: results });
    }
    catch(e) {
      // console.log(e);
      alert(e);
    }

    this.setState({ isLoading: false });
  }

  notes() {
    return invokeApig({ path: '/notes' }, this.props.userToken);
  }

  handleNoteClick = (event) => {
    event.preventDefault();
    this.props.history.push(event.currentTarget.getAttribute('href'));
  }

  renderNotesList(notes) {
    return [{}].concat(notes).map((note, i) => (
      i !== 0
        ? ( <ListGroupItem
              key={note.noteId}
              href={`/notes/${note.noteId}`}
              onClick={this.handleNoteClick}
              header={note.content.trim().split('\n')[0]}>
                { "Created: " + (new Date(note.createdAt)).toLocaleString() }
            </ListGroupItem> )
        : ( <ListGroupItem
              key="new"
              href="/notes/new"
              onClick={this.handleNoteClick}>
                <h4><b>{'\uFF0B'}</b> Create a new note</h4>
            </ListGroupItem> )
    ));
  }

  renderLander() {
    return (
      <div className="lander">
        <h1>ReactNotes</h1>
        <p>A simple React Note app</p>
        <div>
          <Link to="/login" className="btn btn-default btn-lg">Login</Link>
          <Link to="/signup" className="btn btn-default btn-lg">Signup</Link>
        </div>
        
        <div className="other">
        <div className="info"><a href="https://github.com/CaiYiLiang/Serverless-ReactNotes.git" target="_blank">Document & Source</a></div>
        <div className="info"><a href="https://caiyiliang.github.io/" target="_blank">CherryLiang - My Rsume </a></div>
        </div>
      </div>
    );
  }

  renderNotes() {
    return (
      <div className="notes">
        <PageHeader>Your Notes</PageHeader>
        <ListGroup>
          { ! this.state.isLoading
            && this.renderNotesList(this.state.notes) }
        </ListGroup>
      </div>
    );
  }

  render() {
    return (
      <div className="Home">
        { this.props.userToken === null
          ? this.renderLander()
          : this.renderNotes() }
      </div>
    );
  }
}

export default withRouter(Home);
