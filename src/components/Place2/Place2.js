import React from 'react'
import Papa from 'papaparse'
import { ListItem, List, ListItemAvatar, ListItemText, Divider, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

function User(props) {
    const classes = useStyles();

    return (
            <div className={classes.userInfo}>
                <div className={classes.selectedImage} style={{ backgroundImage: `url(${props.foto})` }}></div>
                <section className={classes.text}>
                    <p className={classes.selectedName}>{props.nombre}</p>
                    <p className={classes.message}>{props.message}</p>
                </section>
            </div>
    );

}

const useStyles = makeStyles(theme => ({
    userInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    text: {
        width: '50%',
    },

    selectedImage: {
        width: 170,
        height: 170,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        borderRadius: '100%',
        marginRight: 20,
        backgroundColor: '#3E94F9',
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