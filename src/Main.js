import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import EndOfBuying from './EndOfBuying';
import UserPage from './UserPage';
import App from './App';
import './App.css';
import BuyProductPage from './BuyProductPage';
import AdminCompanyPage from './AdminCompanyPage';
import ForPackagingCompanyPage from './ForPackagingCompanyPage';
import ForDeliveryCompanyPage from './ForDeliveryCompanyPage';

class Main extends React.Component {
    render() {
        const {
            ...attributes
        } = this.props;


        return (
            <Switch>
                <Route path='/login' render={(props) => <LoginPage {...attributes} isAuthed={true}  />} />
                <Route path='/registracija' render={(props) => <RegisterPage {...attributes} isAuthed={true} />} />
                <Route path='/product' render={(props) => <BuyProductPage {...attributes} isAuthed={true} />} />
                <Route path='/endofbuying' render={(props) => <EndOfBuying {...attributes} isAuthed={true} />} />
                <Route path='/user' render={(props) => <UserPage URL="/user" {...attributes} isAuthed={true} />} />
                <Route path='/company/admin' render={(props) => <AdminCompanyPage URL="/company/admin" {...attributes} isAuthed={true} />} />
                <Route path='/company/forpackaging' render={(props) => <ForPackagingCompanyPage title="Nalog za pakovanje" URL="/company/forpackaging" {...attributes} isAuthed={true} />} />
                <Route path='/company/fordelivery' render={(props) => <ForDeliveryCompanyPage title="Nalog za isporuku" URL="/company/forpackaging" {...attributes} isAuthed={true} />} />
                <Route path='/' render={(props) => <App URL="/" {...attributes} isAuthed={true} />}/>
            </Switch>
        )
    }
}

export default Main;