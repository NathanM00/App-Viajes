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

                    <ul>
                        {data.partners !== undefined && data.partners.map((item, i) =>
                            <li >
                                <img src={item.foto} />
                                <p>{item.persona}</p>
                                <p>{item.valorK}</p>
                            </li>
                        )}
                    </ul>

                    <ul>
                        {data.places !== undefined && data.places.map((item, i) =>
                            <li >
                                <img src={item.foto} />
                                <p>{item.destino}</p>
                                <p>{item.valorK}</p>
                            </li>
                        )}
                    </ul>

                    <ul>
                        {data.songs !== undefined && data.songs.map((item, i) =>
                            <li >
                                <img src={item.foto} />
                                <p>{item.cancion}</p>
                                <p>{item.valorK}</p>
                            </li>
                        )}
                    </ul>


                </div>

            </div>
        );
    } else {
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
        display: 'flex',
        flexDirection: 'row',
    },
    planList: {
        width: '95%',
        display: 'flex',
        flexDirection: 'row',
        height: '30%',
        scrollBehavior: 'scroll'
    },
}));

export default DataReader;