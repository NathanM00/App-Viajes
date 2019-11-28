import React from 'react'
import Papa from 'papaparse'
import { ListItem, List, ListItemAvatar, ListItemText, Divider, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

function User(props) {
    const classes = useStyles();

    return (
        <div className={classes.user}>
            <div className={classes.userInfo}>
                <img className={classes.selectedImage} src={props.foto} />
                <section className={classes.text}>
                    <p className={classes.selectedName}>{props.nombre}</p>
                    <p className={classes.message}>{props.message}</p>
                </section>
            </div>
        </div>
    );

}

const useStyles = makeStyles(theme => ({
    user: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        width: '100%',
        height: '20%',
        background: '#FFFFFF',
        borderRadius: '14px',
        padding: '15px',
    },

    userInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    text: {
        width: '50%',
    },

    selectedImage: {
        width: '26%',
        marginRight: 20,
    },

    selectedName: {
        margin: 0,
        marginBottom: 15,
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '25px',
        lineHeight: '43px',

        color: '#5C5C5C',
    },

    message: {
        margin: 0,
        fontFamily: 'Lato',
        fontStyle: 'normal',
        //fontWeight: 'bold',
        fontSize: '22px',
        lineHeight: '30px',

        color: '#727272',
    },
}));

export default User;