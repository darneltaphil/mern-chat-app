import React from 'react';
import { Router, Route } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { useAuth0 } from "@auth0/auth0-react";
import history from './Utilities/history';
import PrivateRoute from './Utilities/private-route';
import Home from './Home/Home';
import Chat from './Chat/Chat';


function App() {
    const { isLoading } = useAuth0();

    // if (isLoading) {
    //   return <Loading />;
    // }
    return (
            <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
                <Router history={history}>
                    <Route path="/" exact component={Home} />
                    <PrivateRoute path="/chat" component={Chat} />
                </Router>
            </SnackbarProvider>
    );
}

export default App;
