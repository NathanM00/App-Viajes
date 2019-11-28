import React from 'react'
import Papa from 'papaparse'
import { ListItem, List, ListItemAvatar, ListItemText, Divider, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

function Music(props) {
    const classes = useStyles();

    return (
        <div className={classes.listItemMusic}>
            <img className={classes.songImg} src={props.foto} />
            <section className={classes.songInfo}>
                <p className={classes.songRecom}>{props.cancion}</p>
                <p className={classes.similarity}><span className={classes.songSimilarity}>{props.valork}</span> de similaridad</p>
                <p className={classes.spotify}>Escucha en Spotify!</p>
            </section>
        </div>
    );

}

const useStyles = makeStyles(theme => ({
    listItemMusic: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '35%',
        height: '30%',
        marginRight: 15,
        marginBottom: 15,
        background: '#FFFFFF',
        //background: '#EDF0F5',
        borderRadius: '14px',
        padding: 15,
    },

    songImg: {
        width: '60%',
        marginRight: 20,
    },

    songInfo: {
        display: 'flex',
        flexDirection: 'column',
    },

    songRecom: {
        margin: 0,
        marginBottom: 15,
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '25px',
        lineHeight: '43px',

        color: '#5C5C5C',
    },

    songSimilarity: {
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '34px',

        color: '#3E94F9',
    },

    similarity: {
        margin: 0,
        marginBottom: 15,
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '34px',

        color: '#727272',
    },

    spotify: {
        margin: 0,
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontSize: '15px',
        lineHeight: '34px',

        color: '#1ED760',
    },
}));

export default Music;