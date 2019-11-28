import React from 'react'
import Papa from 'papaparse'
import { ListItem, List, ListItemAvatar, ListItemText, Divider, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

function Destinations(props) {
    const classes = useStyles();

    return (
        <div className={classes.listItemPlaces}>
            <div className={classes.imagePlaceRecom} style={{ backgroundImage: `url(${props.foto})` }}></div>
            <div className={classes.placeInfo}>
                <p className={classes.namePersonRecom}>{props.destino}</p>
                <p className={classes.similarity}><span className={classes.percentage}>{props.valork}</span> de similitud</p>
            </div>
        </div>
    );

}

const useStyles = makeStyles(theme => ({
    listItemPlaces: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        //justifyContent: 'center',
        width: '30%',
        height: '100%',
        marginRight: 15,
        marginBottom: 15,
        background: '#FFFFFF',
        borderRadius: '14px',
    },
    percentage: {
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '34px',

        color: '#3E94F9',
    },
    imagePlaceRecom: {
        width: '100%',
        height: '55%',
        marginBottom: 10,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        borderTopRightRadius: 14,
        borderTopLeftRadius: 14,
    },

    placeInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    namePersonRecom: {
        margin: 0,
        marginBottom: 15,
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '25px',
        lineHeight: '43px',

        color: '#5C5C5C',
    },

    similarity: {
        margin: 0,
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '34px',

        color: '#727272',
    },
}));

export default Destinations;