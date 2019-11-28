import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from "react-router-dom";

function Main(props) {

    const classes = useStyles();

    return (
        <div className={classes.app}>

            <div className={classes.nav}>
                <img className={classes.logo} src="/images/logo3.png"></img>
                <div className={classes.logreg}>
                    <p>Login</p>
                    <p>Register</p>
                </div>
            </div>

            <div className={classes.container}>

                <div className={classes.info}>
                    <p className={classes.legend}>Conoce los destinos turísticos que mas vayan contigo, las personas que mas enriquezcan tu viaje y las mejor playlist para el camino, todo en <span className={classes.span}>un solo lugar</span>.</p>

                    <div className={classes.promo}>
                        <img className={classes.logo} src="/images/logo3.png"></img>
                        <Link className={classes.start} to='tripcreator'>Empezar</Link>
                    </div>
                </div>

            </div>
        </div>
    );

}

const useStyles = makeStyles(theme => ({
    app: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
    },
    span: {
        color: '#FFDA15',
    },
    logreg: {
        color: 'white',
        fontSize: '1.5em',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '15%',
        paddingLeft: '5%',
        marginTop: '15%',
        justifyContent: 'space-evenly',

        '& p': {
            margin: 0,
        }
    },
    legend: {
        color: 'white',
        width: '60%',
        height: '70%',
        fontSize: '1.9em',
        paddingTop: '2%',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    promo: {
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
        height: '70%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    logo: {
        width: '70%',
    },

    nav: {
        boxSizing: 'border-box',
        display: ' flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '20%',
        height: '100%',
        position: 'fixed',
        background: '#3E94F9',
        paddingTop: '20px',
    },

    container: {
        display: 'flex',
        flexDirection: 'row',
        position: 'fixed',
        marginLeft: '20%',
        width: '80%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url(/paises/atenas2.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
    },

    info: {
        background: 'rgba(26, 26, 26, 0.8)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        height: '50%',
        borderRadius: '14px',
    },

    start: {
        color: '#3E94F9',
        background: '#FFDA15',
        width: '70%',
        textDecoration: 'none',
        textAlign: 'center',
        paddingTop: '3%',
        fontSize: '1.8em',
        height: '20%',
        borderRadius: '14px',
    },

}));

export default Main;