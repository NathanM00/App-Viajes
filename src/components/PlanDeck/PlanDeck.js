import React from 'react'
import Papa from 'papaparse'
import { makeStyles } from '@material-ui/styles';

function DataReader(props) {

    const classes = useStyles();

    if(props.question === 8){
        return (
            <div className={classes.main}>
    
                    <div className={classes.planList}>
    
                    </div>
                    <div className={classes.planDetails}>
    
                    </div>
    
            </div>
        );
    }else{
        return <div></div>
    }

}

const useStyles = makeStyles(theme => ({
    main: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }, 
    planDetails: {
        width: '95%',
        height: '60%',
        background: 'white',
    },
    planList: {
        width: '95%',
        height: '30%',
        background: 'white',
    },
}));

export default DataReader;