import React from 'react'
import Papa from 'papaparse'
import { ListItem, List, ListItemAvatar, ListItemText, Divider, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

function People(props) {
    const classes = useStyles();

    return (
        <div className={classes.user2}>
            {`${props.index}` && <div className={classes.userInfo}>
                <img className={classes.selectedImage} src='`${}`' />
                <section className={classes.text}>
                    <p className={classes.selectedName}>{selected2.nombres}</p>
                    <p className={classes.message}>Tu y tu grupo de amigos podrian ir a estos lugares.</p>
                </section>
            </div>}

            <div className={classes.group}>
                <p className={classes.yourGroup}>Tu grupo.</p>
                <ul className={classes.groupFotos}>
                    {listaOrdenados2.map((item, i) =>
                        <div className={classes.groupMember}>
                            <img className={classes.imagePersonRecomGroup} src={item.foto} />
                            <p className={classes.namePGroup}>{item.persona} {item.valorK}</p>
                        </div>
                    )}
                </ul>
            </div>
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