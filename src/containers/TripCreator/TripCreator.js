import React from 'react';
import Papa from 'papaparse'
import DataReader from '../../components/DataReader/DataReader';
import PlanDeck from '../../components/PlanDeck/PlanDeck';
import { makeStyles } from '@material-ui/styles';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import { fb } from '../../utils/firebase';
import { Button } from '@material-ui/core';

function TripCreator({ user }) {
    const classes = useStyles();
    const [question, setQuestion] = React.useState(1);
    const [rows, setRows] = React.useState([]);
    var newUser;
    var profilePicture;
    //lectura de base de datos de Gente
    React.useEffect(() => {
        async function getData() {
            const response = await fetch('/resources/dataBaseViajes.csv');
            const reader = response.body.getReader();
            const result = await reader.read();
            const decoder = new TextDecoder('utf-8');
            const csv = decoder.decode(result.value);
            const results = Papa.parse(csv, { header: true });
            const rows = results.data;
            setRows(rows);
        }
        getData();
    }, []);
    var newArray = Object.assign(rows);

    function handleQuestion(event) {
        let currentQuestion = parseInt(event.target.value);
        setQuestion(currentQuestion);
    }

    const handleLogout = () => {
        fb.auth().signOut();
    }

    if (!user) {
        return <Redirect to="/login" />;
    } else {
        for (let index = 0; index < newArray.length; index++) {
            if (newArray[index].nombres === user.fullname) {
                newUser = false;
                profilePicture = newArray[index].foto;
            }
        }
    }

    if (newUser) {
        profilePicture = '/images/anonimo.png'
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
                        <button className={classes.navPlans}   value={8} onClick={handleQuestion}> Mis planes</button>
                    </section>

                    <section className={classes.profile}>
                        <br />
                        <img src={profilePicture} className={classes.profilePic} />
                        <section className={classes.profileTexts}>
                            <p className={classes.profileName}>{user.fullname}</p>
                            <p className={classes.profileCountry}>Colombia</p>
                        </section>
                    </section>

                    {user && <p className={classes.logout} onClick={handleLogout}>Cerrar sesión</p>}

                </section>

                <section className={classes.window}>
                    <DataReader question={question} className={classes.infoVisualization}></DataReader>
                    <PlanDeck question={question} className={classes.infoVisualization}></PlanDeck>
                </section>
            </div>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    profile: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        background: "white",
        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px',
    },
    profileCountry: {
        color: '#717171',
        fontSize: '1em',
        margin: 0,
    },
    profileTexts: {
        width: '60%',
        background: "white",
        fontWeight: 'bold',
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    profileName: {
        color: '#282828',
        margin: 0,
        fontSize: '1.3em',
        marginBottom: '10px',
    },
    profilePic: {
        width: '30%',
        paddingTop: '5px',
        paddingBottom: '5px',
    },
    main: {
        width: '100%',
        height: '100%',
    },
    logout: {
        color: 'white',
        marginRight: '160px',
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
        marginBottom: '60px',
    },

    btnConatiner: {
        boxSizing: 'border-box',
        display: ' flex',
        flexDirection: 'column',
        width: '100%',
        height: '70%',
        paddingLeft: '6px',
    },

    navButtons: {
        display: 'flex',
        justifyContent: 'flex-start',
        height: '7%',
        background: 'none',
        paddingLeft: '6%',
        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px',
        color: 'white',
        border: 'none',
        fontFamily: 'Lato',
        fontStyle: 'normal',
        //fontWeight: '600',
        fontSize: '18px',
        lineHeight: '29px',
        marginTop: '10px',

        '&:hover': {
            background: "#FFDA15",
            color: '#3E94F9',
            fontWeight: '600',
        },

        '&:focus': {
            background: "#FFDA15",
            color: '#3E94F9',
            fontWeight: '600',
            border: 'none',
            outline: 'none',
        },
    },

    navPlans: {
        display: 'flex',
        justifyContent: 'flex-start',
        height: '7%',
        background: 'white',
        paddingLeft: '6%',
        textDecoration: 'none',
        paddingTop: '3px',
        color: '#282828',
        border: 'none',
        fontFamily: 'Lato',
        fontStyle: 'normal',
        //fontWeight: '600',
        fontSize: '18px',
        lineHeight: '29px',
        marginTop: '80px',
        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px',
        '&:hover': {
            background: "#3E94F9",
            color: 'white',
            border: '1px solid white',
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