import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import App from './App';
import './App.css';

class Main extends React.Component {
    render() {
        const {
            ...attributes
        } = this.props;


        return (
            <Switch>
                <Route path='/login' render={(props) => <LoginPage {...attributes} isAuthed={true}  />} />
                <Route path='/registracija' render={(props) => <RegisterPage {...attributes} isAuthed={true} />} />
                <Route path='/' render={(props) => <App {...attributes} isAuthed={true} />}/>
            </Switch>
        )
    }
}

export default Main;