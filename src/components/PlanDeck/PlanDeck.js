import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { fb } from '../../utils/firebase';
import Plan from '../Plan/Plan';

function DataReader(props) {

    const classes = useStyles();
    var user = fb.auth().currentUser;
    var db = fb.firestore();
    const [userPlans, setUserPlans] = React.useState([]);
    const [data, setData] = React.useState([]);

    let allPlans = [];

    function handleClick(current) {

        if (current.places === "Ningun destino en el plan.") {
            current.places = [];
            current.places[0] = {
                destino: "Ningun destino en el plan.",
                valorK: '',
                foto: '/images/pointer.png',
            }
        }
        if (current.songs === "Ninguna cancion en el plan.") {
            current.songs = [];
            current.songs[0] = {
                cancion: "Ninguna cancion en el plan.",
                valorK: '',
                foto: '/images/cd.png',
            }
        }
        if (current.partners === "Solo tu haces parte de este plan.") {
            current.partners = [];
            current.partners[0] = {
                persona: "Solo tu haces parte de este plan.",
                valorK: '',
                foto: '/images/anonimo.png',
            }
        }

        console.log(current);
        setData(current);
    }

    React.useEffect(() => {
        var planes = db.collectionGroup('userPlans').where('isPlanned', '==', true);

        planes.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                //console.log(doc.id, " => ", doc.data());

                let item = doc.data()
                item.id = doc.id;
                allPlans.push(item);
                setUserPlans(allPlans);
            });
        }).catch(function (error) {
            console.log("Error getting documents: ", error);
        });
    }, []);

    if (props.question === 8) {

        return (
            <div className={classes.main}>

                <div className={classes.planList}>
                    {userPlans !== undefined && userPlans.map((item, i) =>
                        <Plan onClick={handleClick}
                            key={item.id}
                            fotoLugar={item.places[0].foto}
                            fotoAcomp={item.partners[0].foto}
                            fotoCancion={item.songs[0].foto}
                            destino={"Plan " + item.id}
                            data={item}
                        />
                    )}
                </div>
                <div className={classes.planDetails}>
                    <h3 className={classes.title}>Plan {data.id}</h3>

                    <div className={classes.container}>
                        <div className={classes.columns}>
                            <h3 className={classes.subtitle}>Acompañantes</h3>
                            <div className={classes.itemContainer}>
                                {data.partners !== undefined && data.partners.map((item, i) =>
                                    <div className={classes.item}>
                                        <img className={classes.itemPic} src={item.foto} />
                                        <p className={classes.itemName}>{item.persona}</p>
                                        <p className={classes.itemK}>{item.valorK}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={classes.columns}>
                            <h3 className={classes.subtitle}>Destinos</h3>
                            <div className={classes.itemContainer}>
                                {data.places !== undefined && data.places.map((item, i) =>
                                    <div className={classes.item}>
                                        <img className={classes.itemPic} src={item.foto} />
                                        <p className={classes.itemName}>{item.destino}</p>
                                        <p className={classes.itemK}>{item.valorK}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={classes.columns}>
                            <h3 className={classes.subtitle}>Playlist</h3>
                            <div className={classes.itemContainer}>
                                {data.songs !== undefined && data.songs.map((item, i) =>
                                    <div className={classes.item}>
                                        <img className={classes.itemPic} src={item.foto} />
                                        <p className={classes.itemName}>{item.cancion}</p>
                                        <p className={classes.itemK}>{item.valorK}</p>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        );
    } else {
        return <div></div>
    }

}

const useStyles = makeStyles(theme => ({
    title: {
        color: '#282828',
        fontSize: '1.9em',
        paddingLeft: '30px',
    },
    subtitle: {
        color: '#5C5C5C',
        color: '#3E94F9',
        fontSize: '1.5em',
        marginTop: 0,
    },
    itemContainer: {
        width: '100%',
        height: '80%',
        display: 'flex',
        overflowY: 'auto',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'space-evenly',
    },
    item: {
        width: '100%',
        minHeight: '30%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    itemPic: {
        width: '20%',
    },
    itemK: {
        fontSize: '1em',
        color: '#3E94F9',
        width: '10%',
    },
    itemName: {
        fontSize: '1.3em',
        color: '#5C5C5C',
        width: '60%',
    },
    container: {
        width: '100%',
        height: '90%',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    columns: {
        width: '30%',
        height: '100%',
    },
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
        display: 'flex',
        flexDirection: 'column',
    },
    planList: {
        width: '95%',
        display: 'flex',
        flexDirection: 'row',
        height: '30%',
        overflowX: 'auto',
    },
}));

export default DataReader;