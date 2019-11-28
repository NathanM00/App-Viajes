import React from 'react'
import Papa from 'papaparse'
import { ListItem, List, ListItemAvatar, ListItemText, Divider, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

function Plan(props) {
    const classes = useStyles();

    function handleClick() {
        if (typeof props.onClick === 'function') {
            props.onClick(props.data);
        }
    }

    let fotoLugar = props.fotoLugar;
    let fotoAcomp = props.fotoAcomp;
    let fotoCancion = props.fotoCancion;

    // console.log(props.fotoLugar);
    //console.log(props.fotoAcomp);
    //onsole.log(props.fotoCancion);

    if (fotoLugar === undefined) {
        fotoLugar = '/images/pointer.png';
    } else if (fotoAcomp === undefined) {
        fotoAcomp = '/images/anonimo.png';
    } else if (fotoCancion === undefined) {
        fotoCancion = '/images/cd.png';
    }

    return (
        <div className={classes.listItemPlaces} onClick={handleClick}>
            <div className={classes.collage}>
                <div className={classes.imagePlaceRecomLeft} style={{ backgroundImage: `url(${fotoLugar})` }}></div>
                <div className={classes.imagePlaceRecom} style={{ backgroundImage: `url(${fotoAcomp})` }}></div>
                <div className={classes.imagePlaceRecomRight} style={{ backgroundImage: `url(${fotoCancion})` }}></div>
            </div>

            <div className={classes.placeInfo}>
                <p className={classes.namePersonRecom}>{props.destino}</p>
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

    collage: {
        width: '100%',
        height: '70%',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
        borderTopRightRadius: 14,
        borderTopLeftRadius: 14,
    },
    imagePlaceRecomLeft: {
        borderTopLeftRadius: 14,
        width: '33.5%',
        height: '100%',
        backgroundSize: '150% 150%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    imagePlaceRecomRight: {
        borderTopRightRadius: 14,
        width: '33.5%',
        height: '100%',
        backgroundSize: '150% 150%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    imagePlaceRecom: {
        width: '33.5%',
        height: '100%',
        backgroundSize: '150% 150%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
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

export default Plan;