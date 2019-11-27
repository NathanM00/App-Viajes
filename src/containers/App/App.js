import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Main from '../Main/Main';
import TripCreator from '../TripCreator/TripCreator';
import Login from '../Login/Login';
import { makeStyles } from '@material-ui/styles';

function App() {
    const classes = useStyles();

    return (
        <Router >
            <div>
                <Route path="/login" component={Login} />
                <Route path="/" exact component={Main} />
                <Route path="/tripcreator" component={TripCreator} />
            </div>
        </Router>
    );
}

const useStyles = makeStyles(theme => ({

'@global': {
    body: {
      margin: 0,
      height: '100%',
      width: '100%',
    },
    '*': {
      boxSizing: 'border-box',
    },

}

}));
export default App;