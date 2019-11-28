import React from 'react';
import { Button, TextField, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { fb } from '../../utils/firebase';
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";

const Login = ({ user }) => {
    const classes = useStyles();
    const [error, setError] = React.useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        fb.auth().signInWithEmailAndPassword(email, password)
            .catch(function (error) {
                var errorMessage = error.message;
                setError(errorMessage);
            });
    }

    if (user) {
        return <Redirect to="/" />
    }

    return (
        <Grid container justify="center">

            <Grid item md={5}>
                <Paper className={classes.root}>
                    <div className={classes.up}>
                        <Typography variant="h3" className={classes.tittle}>Inicio</Typography>
                        <Link className={classes.links} to='/'>
                            <img className={classes.logo} src="/images/logodark.png"></img>
                        </Link>
                    </div>


                    <form onSubmit={handleSubmit} className={classes.form}>

                        <TextField
                            className={classes.field}
                            required
                            name="email"
                            label="Email"
                            type="email"
                            margin="normal"
                        />

                        <TextField
                            className={classes.field}
                            required
                            name="password"
                            label="Contraseña"
                            type="password"
                            margin="normal"
                        />

                        {error && <Typography className={classes.error}>{error}</Typography>}
                        <div className={classes.bottom} >
                            <Button className={classes.button} type="submit" >Iniciar</Button>
                            <Link className={classes.register} to="register" >No tienes cuenta? Registrate</Link>
                        </div>
                    </form>
                </Paper>
            </Grid>

        </Grid>
    );
}
const useStyles = makeStyles(theme => ({

    root: {
        marginTop: 80,
        padding: 10,
    },
    tittle: {
        color: '#3E94F9',
        paddingTop: '30px',
    },
    up: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    logo: {
        width: '100%',
        paddingTop: '20px',
    },
    links:{
        width:'35%',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    field: {
        width: '80%',
    },
    button: {
        background: '#FFDA15',
        color: '#3E94F9',
    },
    register: {
        color: '#3E94F9',
        textDecoration: 'none',
    },
    bottom: {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '100%',
        alignItems: 'center',
        marginTop: '30px',
        color: '#3E94F9',
        marginBottom: '10px'

    },
    error: {
        color: 'red'
    }
}));

export default Login;