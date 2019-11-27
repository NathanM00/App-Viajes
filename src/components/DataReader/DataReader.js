import React from 'react'
import Papa from 'papaparse'
import { ListItem, List, ListItemAvatar, ListItemText, Divider, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

function DataReader() {

    const classes = useStyles();

    const [rows, setRows] = React.useState([]);
    const [rows2, setRows2] = React.useState([]);

    //lectura de base de datos de Gente
    React.useEffect(() => {
        async function getData() {
            const response = await fetch('/resources/dataBaseViajes.csv')
            const reader = response.body.getReader()
            const result = await reader.read() // raw array
            const decoder = new TextDecoder('utf-8')
            const csv = decoder.decode(result.value) // the csv text
            const results = Papa.parse(csv, { header: true }) // object with { data, errors, meta }
            const rows = results.data // array of objects
            setRows(rows)
        }
        getData()
    }, []) // [] means just do this once, after initial render

    //lectura de base de datos de Destinos
    React.useEffect(() => {
        async function getData() {
            const response = await fetch('/resources/dataBaseDestinos.csv')
            const reader = response.body.getReader()
            const result = await reader.read() // raw array
            const decoder = new TextDecoder('utf-8')
            const csv = decoder.decode(result.value) // the csv text
            const results = Papa.parse(csv, { header: true }) // object with { data, errors, meta }
            const rows = results.data // array of objects
            setRows2(rows)
        }
        getData()
    }, []) // [] means just do this once, after initial render

    var newArray = Object.assign(rows);
    var newArray2 = Object.assign(rows2);
    let objetoA;
    let objetoB;
    var nuevosK = [];

    const [selectIndex, setSelectedIndex] = React.useState('');
    const [selectIndex3, setSelectedIndex3] = React.useState('');
    const [selectIndex4, setSelectedIndex4] = React.useState('');
    const [selectIndex5, setSelectedIndex5] = React.useState('');
    const [selectIndex6, setSelectedIndex6] = React.useState('');

    const [listaOrdenados, setListaOrdenados] = React.useState([]);
    const [listaOrdenados4, setListaOrdenados4] = React.useState([]);
    const [listaOrdenados5, setListaOrdenados5] = React.useState([]);
    const [listaOrdenados6, setListaOrdenados6] = React.useState([]);

    const [listaDestinos2, setListaDestinos2] = React.useState([]);
    const [listaDestinos3, setListaDestinos3] = React.useState([]);
    const [listaDestinos5, setListaDestinos5] = React.useState([]);
    const [listaDestinos6, setListaDestinos6] = React.useState([]);
    const [listaDestinos6b, setListaDestinos6b] = React.useState([]);

    const [indexLista, setIndexLista] = React.useState('0');
    const [indexLista2, setIndexLista2] = React.useState('0');
    const [indexLista3, setIndexLista3] = React.useState('0');
    const [indexLista4, setIndexLista4] = React.useState('0');
    const [indexLista5, setIndexLista5] = React.useState('0');
    const [indexLista5b, setIndexLista5b] = React.useState('0');
    const [indexLista6, setIndexLista6] = React.useState('0');
    const [indexLista6b, setIndexLista6b] = React.useState('0');
    const [indexLista6c, setIndexLista6c] = React.useState('0');

    let selected = null;
    if (selectIndex !== '') selected = newArray[selectIndex];

    let selected3 = null;
    if (selectIndex3 !== '') selected3 = newArray[selectIndex3];

    let selected4 = null;
    if (selectIndex4 !== '') selected4 = newArray2[selectIndex4];

    let selected5 = null;
    if (selectIndex5 !== '') selected5 = newArray2[selectIndex5];

    let selected6 = null;
    if (selectIndex6 !== '') selected6 = newArray[selectIndex6];

    //Funciones donde dan los cambios de valor en los inputss
    function handleChange(event) {
        setSelectedIndex(event.target.value);
    }

    function handleChange3(event) {
        setSelectedIndex3(event.target.value);
    }

    function handleChange4(event) {
        setSelectedIndex4(event.target.value);
    }

    function handleChange5(event) {
        setSelectedIndex5(event.target.value);
    }

    function handleChange6(event) {
        setSelectedIndex6(event.target.value);
        setIndexLista6(1);
    }

    //Los que estan relacionados a personas
    function handleAcompañantes(event) {
        setIndexLista(event.target.value);
    }

    function handleAcompañantes4(event) {
        setIndexLista4(event.target.value);
    }

    function handleAcompañantes5(event) {
        setIndexLista5b(event.target.value);
    }

    function handleAcompañantes6(event) {
        setIndexLista6c(event.target.value);
    }

    //Los que estan relacionados a lugares
    function handleLugares2(event) {
        setIndexLista2(event.target.value);
    }

    function handleLugares3(event) {
        setIndexLista3(event.target.value);
    }

    function handleLugares5(event) {
        setIndexLista5(event.target.value);
    }

    function handleLugares6(event) {
        setIndexLista6b(event.target.value);

    }

    //Funciones donde se hacen las listas y todo el asunto
    function formulaCos() {
        objetoA = Object.values(selected).slice(1);

        for (let index = 0; index < newArray.length; index++) {
            objetoB = Object.values(newArray[index]).slice(1);

            var numerador = 0;
            var denominadorA = 0;
            var denominadorB = 0;

            for (let index = 1; index < objetoA.length; index++) {
                numerador += (parseInt(objetoA[index]) * parseInt(objetoB[index]));
                denominadorA += (parseInt(objetoA[index]) * parseInt(objetoA[index]));
                denominadorB += (parseInt(objetoB[index]) * parseInt(objetoB[index]));
            }

            denominadorA = Math.sqrt(denominadorA);
            denominadorB = Math.sqrt(denominadorB);
            var valorK = numerador / (denominadorA * denominadorB);
            var valorFinalK = parseInt(valorK * 100);

            if (valorFinalK < 99) {
                nuevosK.push({
                    persona: newArray[index].nombres,
                    valorK: valorFinalK + "%",
                    info: objetoB,
                });
            }

        }
        setListaOrdenados(nuevosK.sort((a, b) => (a.valorK > b.valorK) ? - 1 : 1).slice(0, indexLista));
    }

    function formulaCos2() {
        objetoA = Object.values(selected).slice(1);

        var yoMismo = {
            info: objetoA,
        }

        let temp = listaOrdenados;
        temp.push(yoMismo);

        var promedio = [];
        promedio[37] = 0;
        var ordenado;

        for (let index = 0; index < promedio.length; index++) {
            promedio[index] = 0;
        }
        for (let index = 0; index < temp.length; index++) {
            ordenado = temp[index].info;
            for (let y = 1; y < ordenado.length; y++) {
                promedio[y] += parseInt(ordenado[y]);
            }
        }
        for (let index = 0; index < promedio.length; index++) {
            promedio[index] = parseInt(promedio[index] / temp.length);
        }
        // Este promedio es el perfil grupal de las personas que salen en la primer pregunta sin contarte a ti mismo xd
        let perfilGrupal = null;
        perfilGrupal = promedio;

        let objetoC = Object.values(perfilGrupal).slice(1);
        let objetoD;

        for (let index = 0; index < newArray2.length; index++) {
            objetoD = Object.values(newArray2[index]).slice(2);

            var numerador = 0;
            var denominadorA = 0;
            var denominadorB = 0;

            for (let index = 1; index < objetoC.length; index++) {
                numerador += (parseInt(objetoC[index]) * parseInt(objetoD[index]));
                denominadorA += (parseInt(objetoC[index]) * parseInt(objetoC[index]));
                denominadorB += (parseInt(objetoD[index]) * parseInt(objetoD[index]));
            }

            denominadorA = Math.sqrt(denominadorA);
            denominadorB = Math.sqrt(denominadorB);
            var valorK = numerador / (denominadorA * denominadorB);
            var valorFinalK = parseInt(valorK * 100);

            if (valorFinalK < 99) {
                nuevosK.push({
                    destino: newArray2[index].Destino,
                    valorK: valorFinalK + "%",
                    info: objetoD,
                });
                console.log(nuevosK.destino);
            }
        }
        setListaDestinos2(nuevosK.sort((a, b) => (a.valorK > b.valorK) ? - 1 : 1).slice(0, indexLista2));

    }

    function formulaCos3() {
        let objetoA3 = Object.values(selected3).slice(1);

        for (let index = 0; index < newArray2.length; index++) {
            objetoB = Object.values(newArray2[index]).slice(1);

            var numerador = 0;
            var denominadorA = 0;
            var denominadorB = 0;

            for (let index = 1; index < objetoA3.length; index++) {
                numerador += (parseInt(objetoA3[index]) * parseInt(objetoB[index]));
                denominadorA += (parseInt(objetoA3[index]) * parseInt(objetoA3[index]));
                denominadorB += (parseInt(objetoB[index]) * parseInt(objetoB[index]));
            }

            denominadorA = Math.sqrt(denominadorA);
            denominadorB = Math.sqrt(denominadorB);
            var valorK = numerador / (denominadorA * denominadorB);
            var valorFinalK = parseInt(valorK * 100);

            if (valorFinalK < 99) {
                nuevosK.push({
                    destino: newArray2[index].Destino,
                    valorK: valorFinalK + "%",
                    info: objetoB,
                });
            }

        }
        setListaDestinos3(nuevosK.sort((a, b) => (a.valorK > b.valorK) ? - 1 : 1).slice(0, indexLista3));
    }

    function formulaCos4() {
        let objetoA = Object.values(selected4).slice(2);;

        for (let index = 0; index < newArray.length; index++) {
            objetoB = Object.values(newArray[index]).slice(1);

            var numerador = 0;
            var denominadorA = 0;
            var denominadorB = 0;

            for (let index = 1; index < objetoA.length; index++) {
                numerador += (parseInt(objetoA[index]) * parseInt(objetoB[index]));
                denominadorA += (parseInt(objetoA[index]) * parseInt(objetoA[index]));
                denominadorB += (parseInt(objetoB[index]) * parseInt(objetoB[index]));
            }

            denominadorA = Math.sqrt(denominadorA);
            denominadorB = Math.sqrt(denominadorB);
            var valorK = numerador / (denominadorA * denominadorB);
            var valorFinalK = parseInt(valorK * 100);

            if (valorFinalK < 99) {
                nuevosK.push({
                    persona: newArray[index].nombres,
                    valorK: valorFinalK + "%",
                    info: objetoB,
                });
            }
        }
        setListaOrdenados4(nuevosK.sort((a, b) => (a.valorK > b.valorK) ? - 1 : 1).slice(0, indexLista4));
    }

    function formulaCos5() {
        objetoA = Object.values(selected5).slice(2);
        console.log(objetoA);

        for (let index = 0; index < newArray2.length; index++) {
            objetoB = Object.values(newArray2[index]).slice(1);

            var numerador = 0;
            var denominadorA = 0;
            var denominadorB = 0;

            for (let index = 1; index < objetoA.length; index++) {
                numerador += (parseInt(objetoA[index]) * parseInt(objetoB[index]));
                denominadorA += (parseInt(objetoA[index]) * parseInt(objetoA[index]));
                denominadorB += (parseInt(objetoB[index]) * parseInt(objetoB[index]));
            }

            denominadorA = Math.sqrt(denominadorA);
            denominadorB = Math.sqrt(denominadorB);
            var valorK = numerador / (denominadorA * denominadorB);
            var valorFinalK = parseInt(valorK * 100);

            if (valorFinalK < 99) {
                nuevosK.push({
                    destino: newArray2[index].Destino,
                    valorK: valorFinalK + "%",
                    info: objetoB,
                });
            }

        }
        setListaDestinos5(nuevosK.sort((a, b) => (a.valorK > b.valorK) ? - 1 : 1).slice(0, indexLista5));
    }

    function formulaCos5b() {
        objetoA = Object.values(selected5).slice(2);

        var yoMismo = {
            info: objetoA,
        }

        let temp = listaOrdenados5;
        temp.push(yoMismo);

        var promedio = [];
        promedio[37] = 0;
        var ordenado;

        for (let index = 0; index < promedio.length; index++) {
            promedio[index] = 0;
        }
        for (let index = 0; index < temp.length; index++) {
            ordenado = temp[index].info;
            for (let y = 1; y < ordenado.length; y++) {
                promedio[y] += parseInt(ordenado[y]);
            }
        }
        for (let index = 0; index < promedio.length; index++) {
            promedio[index] = parseInt(promedio[index] / temp.length);
        }
        // Este promedio es el perfil grupal de las personas que salen en la primer pregunta sin contarte a ti mismo xd
        let perfilGrupal = null;
        perfilGrupal = promedio;

        let objetoC = Object.values(perfilGrupal).slice(1);
        let objetoD;

        for (let index = 0; index < newArray.length; index++) {
            objetoD = Object.values(newArray[index]).slice(1);

            var numerador = 0;
            var denominadorA = 0;
            var denominadorB = 0;

            for (let index = 1; index < objetoC.length; index++) {
                numerador += (parseInt(objetoC[index]) * parseInt(objetoD[index]));
                denominadorA += (parseInt(objetoC[index]) * parseInt(objetoC[index]));
                denominadorB += (parseInt(objetoD[index]) * parseInt(objetoD[index]));
            }

            denominadorA = Math.sqrt(denominadorA);
            denominadorB = Math.sqrt(denominadorB);
            var valorK = numerador / (denominadorA * denominadorB);
            var valorFinalK = parseInt(valorK * 100);

            if (valorFinalK < 99) {
                nuevosK.push({
                    persona: newArray[index].nombres,
                    valorK: valorFinalK + "%",
                    info: objetoB,
                });
            }
        }
        setListaOrdenados5(nuevosK.sort((a, b) => (a.valorK > b.valorK) ? - 1 : 1).slice(0, indexLista5b));
    }

    function formulaCos6() {
        let objetoA = Object.values(selected6).slice(1);

        for (let index = 0; index < newArray2.length; index++) {
            objetoB = Object.values(newArray2[index]).slice(1);

            var numerador = 0;
            var denominadorA = 0;
            var denominadorB = 0;

            for (let index = 1; index < objetoA.length; index++) {
                numerador += (parseInt(objetoA[index]) * parseInt(objetoB[index]));
                denominadorA += (parseInt(objetoA[index]) * parseInt(objetoA[index]));
                denominadorB += (parseInt(objetoB[index]) * parseInt(objetoB[index]));
            }

            denominadorA = Math.sqrt(denominadorA);
            denominadorB = Math.sqrt(denominadorB);
            var valorK = numerador / (denominadorA * denominadorB);
            var valorFinalK = parseInt(valorK * 100);

            if (valorFinalK < 99) {
                nuevosK.push({
                    destino: newArray2[index].Destino,
                    valorK: valorFinalK + "%",
                    info: objetoB,
                });
            }

        }
        setListaDestinos6(nuevosK.sort((a, b) => (a.valorK > b.valorK) ? - 1 : 1).slice(0, indexLista6));
    }

    function formulaCos6b(){
        objetoA =  Object.values(listaDestinos6[0].info).slice(1);
        for (let index = 0; index < newArray2.length; index++) {
            objetoB = Object.values(newArray2[index]).slice(1);

            var numerador = 0;
            var denominadorA = 0;
            var denominadorB = 0;

            for (let index = 1; index < objetoA.length; index++) {
                numerador += (parseInt(objetoA[index]) * parseInt(objetoB[index]));
                denominadorA += (parseInt(objetoA[index]) * parseInt(objetoA[index]));
                denominadorB += (parseInt(objetoB[index]) * parseInt(objetoB[index]));
            }

            denominadorA = Math.sqrt(denominadorA);
            denominadorB = Math.sqrt(denominadorB);
            var valorK = numerador / (denominadorA * denominadorB);
            var valorFinalK = parseInt(valorK * 100);

            if (valorFinalK < 99) {
                nuevosK.push({
                    destino: newArray2[index].Destino,
                    valorK: valorFinalK + "%",
                    info: objetoB,
                });
            }

        }
        setListaDestinos6b(nuevosK.sort((a, b) => (a.valorK > b.valorK) ? - 1 : 1).slice(0, indexLista6b));
    }

    function formulaCos6c() {
        objetoA =  Object.values(listaDestinos6[0].info).slice(1);

        var yoMismo = {
            info: objetoA,
        }

        let temp = listaDestinos6b;
        temp.push(yoMismo);

        var promedio = [];
        promedio[37] = 0;
        var ordenado;

        for (let index = 0; index < promedio.length; index++) {
            promedio[index] = 0;
        }
        for (let index = 0; index < temp.length; index++) {
            ordenado = temp[index].info;
            for (let y = 1; y < ordenado.length; y++) {
                promedio[y] += parseInt(ordenado[y]);
            }
        }
        for (let index = 0; index < promedio.length; index++) {
            promedio[index] = parseInt(promedio[index] / temp.length);
        }
        // Este promedio es el perfil grupal de las personas que salen en la primer pregunta sin contarte a ti mismo xd
        let perfilGrupal = null;
        perfilGrupal = promedio;

        let objetoC = Object.values(perfilGrupal).slice(1);
        let objetoD;

        for (let index = 0; index < newArray.length; index++) {
            objetoD = Object.values(newArray[index]).slice(1);

            var numerador = 0;
            var denominadorA = 0;
            var denominadorB = 0;

            for (let index = 1; index < objetoC.length; index++) {
                numerador += (parseInt(objetoC[index]) * parseInt(objetoD[index]));
                denominadorA += (parseInt(objetoC[index]) * parseInt(objetoC[index]));
                denominadorB += (parseInt(objetoD[index]) * parseInt(objetoD[index]));
            }

            denominadorA = Math.sqrt(denominadorA);
            denominadorB = Math.sqrt(denominadorB);
            var valorK = numerador / (denominadorA * denominadorB);
            var valorFinalK = parseInt(valorK * 100);

            if (valorFinalK < 99) {
                nuevosK.push({
                    persona: newArray[index].nombres,
                    valorK: valorFinalK + "%",
                    info: objetoB,
                });
            }
        }
        setListaOrdenados6(nuevosK.sort((a, b) => (a.valorK > b.valorK) ? - 1 : 1).slice(0, indexLista6c));
    }

    return (
        <div className={classes.app}>
            <section className={classes.nav}>
                <img className={classes.logo} src="/images/logo2.png"></img>

                <section className={classes.btnConatiner}>
                    <button className={classes.navButtons}>Personas similares</button>
                    <button className={classes.navButtons}>Viaje grupal</button>
                    <button className={classes.navButtons}>Destinos para ti</button>
                    <button className={classes.navButtons}>Destinos para ti y amigos</button>
                    <button className={classes.navButtons}>Destinos para amigos</button>
                    <button className={classes.navButtons}>Tus destinos para los demás</button>
                    <button className={classes.navButtons}>Música para tus viajes</button>
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

                <section className={classes.infoVisualization}>
                    <div>
                        <h1>Pregunta 1</h1>
                        <p>Selecciona la persona base</p>
                        <select value={selectIndex} onChange={handleChange}>
                            <option value="">-</option>

                            {newArray.map((item, i) =>
                                <option value={i} key={i}>{item.nombres}</option>
                            )}
                        </select>
                        {selected && <div>
                            {selected.nombres}

                        </div>}
                        <p>Selecciona el numero de acompañantes</p>
                        <input onChange={handleAcompañantes} type='number' placeholder='Numero de acompañantes' />
                        <button onClick={formulaCos}>Start</button>
                        <p>Acompañantes recomendados</p>
                        <ul>
                            {listaOrdenados.map((item, i) =>
                                <li>{item.persona}{item.valorK}</li>
                            )}
                        </ul>
                    </div>

                    <div>
                        <h1>Pregunta 2</h1>
                        <p>Segun el grupo de personas anterior, selecciona el numero de lugares</p>
                        <input onChange={handleLugares2} type='number' placeholder='Numero de lugares recomendados' />
                        <button onClick={formulaCos2}>Start</button>
                        <p>Destinos recomendados</p>
                        <ul>
                            {listaDestinos2.map((item, i) =>
                                <li>{item.destino}{item.valorK}</li>
                            )}
                        </ul>
                    </div>

                    <div>
                        <h1>Pregunta 3</h1>
                        <p>Selecciona la persona base</p>
                        <select value={selectIndex3} onChange={handleChange3}>
                            <option value="">-</option>

                            {newArray.map((item, i) =>
                                <option value={i} key={i}>{item.nombres}</option>
                            )}
                        </select>
                        {selected3 && <div>
                            {selected3.nombres}
                        </div>}

                        <p>Selecciona el numero de destinos</p>
                        <input onChange={handleLugares3} type='number' placeholder='Numero de lugares recomendados' />
                        <button onClick={formulaCos3}>Start</button>
                        <p>Destinos recomendados</p>
                        <ul>
                            {listaDestinos3.map((item, i) =>
                                <li>{item.destino}{item.valorK}</li>
                            )}
                        </ul>
                    </div>

                    <div>
                        <h1>Pregunta 4</h1>
                        <p>Selecciona el destino base</p>
                        <select value={selectIndex4} onChange={handleChange4}>
                            <option value="">-</option>

                            {newArray2.map((item, i) =>
                                <option value={i} key={i}>{item.Destino}</option>
                            )}
                        </select>
                        {selected4 && <div>
                            {selected4.Destino}

                        </div>}

                        <p>Selecciona el numero de personas</p>
                        <input onChange={handleAcompañantes4} type='number' placeholder='Numero de personas' />
                        <button onClick={formulaCos4}>Start</button>
                        <p>Personas recomendadas</p>
                        <ul>
                            {listaOrdenados4.map((item, i) =>
                                <li>{item.persona}{item.valorK}</li>
                            )}
                        </ul>
                    </div>

                    <div>
                        <h1>Pregunta 5</h1>
                        <p>Selecciona el destino base</p>
                        <select value={selectIndex5} onChange={handleChange5}>
                            <option value="">-</option>

                            {newArray2.map((item, i) =>
                                <option value={i} key={i}>{item.Destino}</option>
                            )}
                        </select>
                        {selected5 && <div>
                            {selected5.Destino}

                        </div>}
                        <p>Selecciona el numero de destinos similares</p>
                        <input onChange={handleLugares5} type='number' placeholder='Numero de destinos similares' />
                        <button onClick={formulaCos5}>Start</button>
                        <p>Destinos Similares</p>
                        <ul>
                            {listaDestinos5.map((item, i) =>
                                <li>{item.destino}{item.valorK}</li>
                            )}
                        </ul>
                        <p>Selecciona el numero de personas</p>
                        <input onChange={handleAcompañantes5} type='number' placeholder='Numero de personas' />
                        <button onClick={formulaCos5b}>Start</button>
                        <p>Posibles Interesados</p>
                        <ul>
                            {listaOrdenados5.map((item, i) =>
                                <li>{item.persona}{item.valorK}</li>
                            )}
                        </ul>
                    </div>
                </section>

            </section>
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
        //paddingLeft: '6px',
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

export default DataReader;