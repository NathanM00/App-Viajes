import React from 'react';
import DataReader from '../../components/DataReader/DataReader';
import { makeStyles } from '@material-ui/styles';

function TripCreator() {

  const classes = useStyles();

  const [question, setQuestion] = React.useState(1);

  function handleQuestion(event){
    let currentQuestion = parseInt(event.target.value);
    setQuestion(currentQuestion);
  }

  return (
    <div >
        <div className={classes.app}>
            <section className={classes.nav}>
                <img className={classes.logo} src="/images/logo2.png"></img>

                <section className={classes.btnConatiner}>
                    <button className={classes.navButtons} value={1} onClick={handleQuestion}>Personas similares</button>
                    <button className={classes.navButtons} value={2} onClick={handleQuestion}>Viaje grupal</button>
                    <button className={classes.navButtons} value={3} onClick={handleQuestion}>Destinos para ti</button>
                    <button className={classes.navButtons} value={4} onClick={handleQuestion}>Destinos para ti y amigos</button>
                    <button className={classes.navButtons} value={5} onClick={handleQuestion}>Destinos para amigos</button>
                    <button className={classes.navButtons} value={6} onClick={handleQuestion}>Tus destinos para los demás</button>
                    <button className={classes.navButtons} value={7} onClick={handleQuestion}>Música para tus viajes</button>
                </section>

            </section>

            <section className={classes.window}>

                <div className={classes.inputs}>
                    <section className={classes.input}>
                        <div className={classes.instruction}>
                            <div className={classes.mandalorian}></div>
                            <p className={classes.inputText}>Escoge tu usuario.</p>
                        </div>

                        <input />
                    </section>

                    <section className={classes.input}>
                        <div className={classes.instruction}>
                            <div className={classes.mandalorian}></div>
                            <p className={classes.inputText}>Escoge el número de personas para comparar.</p>
                        </div>

                        <input />
                    </section>
                </div>
               
                <DataReader question={question} className={classes.infoVisualization}></DataReader>

            </section>
        </div>
    </div>
  );
}
const useStyles = makeStyles(theme => ({
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
      paddingTop: '20px',
  },

  logo: {
      boxSizing: 'content-box',
      width: 'auto',
      height: 'auto',
      marginTop: '30px',
      marginBottom: '80px',
  },

  btnConatiner: {
      boxSizing: 'border-box',
      display: ' flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      paddingLeft: '6px',
  },

  navButtons: {
      display: 'flex',
      justifyContent: 'flex-start',
      height: '7%',
      background: 'none',
      paddingLeft: '6%',

      color: 'white',
      border: 'none',
      fontFamily: 'Lato',
      fontStyle: 'normal',
      //fontWeight: '600',
      fontSize: '18px',
      lineHeight: '29px',

      '&:hover': {
          background: "#FFDA15",
          color: '#3E94F9',
          fontWeight: '600',
      },
  },

  window: {
      boxSizing: 'border-box',
      padding: '20px',
      width: '80%',
      height: '100%',
      marginLeft: '20%',
      background: '#EDF0F5',
  },

  inputs: {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: '15px',
      paddingBottom: '15px',
      paddingLeft: '25px',
      paddingRight: '25px',
      width: '100%',
      height: '120px',
      background: '#3E94F9',
      borderRadius: '14px',
  },

  input: {
      marginRight: '35px',
  },

  instruction: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
  },

  mandalorian: {
      width: '10px',
      height: '10px',
      background: '#FFDA15',
      borderRadius: '6px',
      marginRight: '8px',
  },

  inputText: {
      margin: '0',
      fontFamily: 'Lato',
      fontStyle: 'normal',
      //fontWeight: '600',
      fontSize: '18px',
      lineHeight: '29px',

      color: '#FFFFFF',

  },

}));

export default TripCreator;