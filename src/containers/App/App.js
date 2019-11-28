import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Main from '../Main/Main';
import TripCreator from '../TripCreator/TripCreator';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { makeStyles } from '@material-ui/styles';
import { fb } from '../../utils/firebase'

function App() {
    const classes = useStyles();

    const [ user, setUser ] = React.useState(null);

    React.useEffect(() => {
      return fb.auth().onAuthStateChanged(function(user) {
        if(user){
          let db = fb.firestore();
          db.collection('users').doc(user.uid).get()
            .then((doc) => {
              setUser({
                ...doc.data(),
                uid: user.uid,
              });
            });
        } else {
          setUser(null);
        }
      });
    }, []);
    
    return (
        <Router >
            <div>
                <Route path="/login" render={() => <Login user={user} />} />
                <Route path="/register" render={() => <Register user={user} />} />
                <Route path="/" exact render={() => <Main user={user} />} />
                <Route path="/tripcreator" render={() => <TripCreator user={user} />} />
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