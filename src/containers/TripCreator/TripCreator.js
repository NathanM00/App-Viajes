import React from 'react';
import DataReader from '../../components/DataReader/DataReader';
import { makeStyles } from '@material-ui/styles';

function TripCreator() {
    const classes = useStyles();

    const [question, setQuestion] = React.useState(1);

    function handleQuestion(event) {
        let currentQuestion = parseInt(event.target.value);
        setQuestion(currentQuestion);
    }

    return (
        <div className={classes.main}>
            <div className={classes.app}>
                <section className={classes.nav}>
                    <img className={classes.logo} src="/images/logo3.png"></img>

                    <section className={classes.btnConatiner}>
                        <button className={classes.navButtons} value={1} onClick={handleQuestion}>Personas similares</button>
                        <button className={classes.navButtons} value={2} onClick={handleQuestion}>Viaje grupal</button>
                        <button className={classes.navButtons} value={3} onClick={handleQuestion}>Destinos para ti</button>
                        <button className={classes.navButtons} value={4} onClick={handleQuestion}>Destinos para ti y amigos</button>
                        <button className={classes.navButtons} value={5} onClick={handleQuestion}>Destinos para amigos</button>
                        <button className={classes.navButtons} value={6} onClick={handleQuestion}>Tus destinos para los demás</button>
                        <button className={classes.navButtons} value={7} onClick={handleQuestion}>Música para tus viajes</button>
                    </section>

                </section>

                <section className={classes.window}>

                    <DataReader question={question} className={classes.infoVisualization}></DataReader>

                </section>
            </div>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    main: {
        width: '100%',
        height: '100%',

    },

    app: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
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
        //paddingLeft: '6px',
        paddingTop: '20px',
    },

    logo: {
        width: '70%',
        marginBottom: '80px',

    },

    btnConatiner: {
        boxSizing: 'border-box',
        display: ' flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        paddingLeft: '6px',
    },

    navButtons: {
        display: 'flex',
        justifyContent: 'flex-start',
        height: '7%',
        background: 'none',
        paddingLeft: '6%',

        color: 'white',
        border: 'none',
        fontFamily: 'Lato',
        fontStyle: 'normal',
        //fontWeight: '600',
        fontSize: '18px',
        lineHeight: '29px',

        '&:hover': {
            background: "#FFDA15",
            color: '#3E94F9',
            fontWeight: '600',
        },
    },

    window: {
        //boxSizing: 'conten',
        padding: '20px',
        width: '80%',
        height: '100vh',
        marginLeft: '20%',
        background: '#EDF0F5',
    },

}));

export default TripCreator;