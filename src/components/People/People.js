import React from 'react'
import Papa from 'papaparse'
import { ListItem, List, ListItemAvatar, ListItemText, Divider, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

function People(props) {
    const classes = useStyles();

    return (
        <div className={classes.listItem}>
            <img className={classes.imagePersonRecom} src={props.foto} />
            <p className={classes.namePersonRecom}>{props.persona}</p>
            <p className={classes.similarity}><span className={classes.percentage}>{props.valorK}</span> de similitud</p>
        </div>
    );

}

const useStyles = makeStyles(theme => ({
    listItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
        height: '100%',
        padding: 15,
        marginRight: 15,
        marginBottom: 15,
        background: '#FFFFFF',
        borderRadius: '14px',
    },

    imagePersonRecom: {
        width: '60%',
        marginBottom: 20,
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

    percentage: {
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '34px',

        color: '#3E94F9',
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

export default People;