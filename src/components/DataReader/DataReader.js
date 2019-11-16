import React from 'react'
import Papa from 'papaparse'
import { ListItem, List, ListItemAvatar, ListItemText, Divider, Avatar } from '@material-ui/core';

function DataReader() {

    const [rows, setRows] = React.useState([]);
    const [rows2, setRows2] = React.useState([]);
    const [selectIndex, setSelectedIndex] = React.useState('');

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

    const [listaOrdenados, setListaOrdenados] = React.useState([]);
    const [listaDestinos2, setListaDestinos2] = React.useState([]);
    const [listaDestinos3, setListaDestinos3] = React.useState([]);

    const [indexLista, setIndexLista] = React.useState('0');
    const [indexLista2, setIndexLista2] = React.useState('0');
    const [indexLista3, setIndexLista3] = React.useState('0');

    let selected = null;
    if (selectIndex !== '') selected = newArray[selectIndex];
    let perfilGrupal = null;

    //Funciones donde dan los cambios de valor en los inputss
    function handleChange(event) {
        setSelectedIndex(event.target.value);
    }

    function handleAcompañantes(event) {
        setIndexLista(event.target.value);
    }

    function handleLugares2(event) {
        setIndexLista2(event.target.value);
    }

    function handleLugares3(event) {
        setIndexLista3(event.target.value);
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
        objetoA = Object.values(selected).slice(1);

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
        setListaDestinos3(nuevosK.sort((a, b) => (a.valorK > b.valorK) ? - 1 : 1).slice(0, indexLista3));
    }

    return (
        <div>

            <div>
                <h1>Pregunta 1</h1>
                <select value={selectIndex} onChange={handleChange}>
                    <option value="">-</option>

                    {newArray.map((item, i) =>
                        <option value={i} key={i}>{item.nombres}</option>
                    )}
                </select>
                {selected && <div>
                    {selected.nombres}

                </div>}

                <input onChange={handleAcompañantes} type='number' placeholder='Numero de acompañantes' />
                <button onClick={formulaCos}>Start</button>

                <ul>
                    {listaOrdenados.map((item, i) =>
                        <li>{item.persona}{item.valorK}</li>
                    )}
                </ul>
            </div>

            <div>
                <h1>Pregunta 2</h1>
                <input onChange={handleLugares2} type='number' placeholder='Numero de lugares recomendados' />
                <button onClick={formulaCos2}>Start</button>
                <ul>
                    {listaDestinos2.map((item, i) =>
                        <li>{item.destino}{item.valorK}</li>
                    )}
                </ul>
            </div>

            <div>
                <h1>Pregunta 3</h1>
                <input onChange={handleLugares3} type='number' placeholder='Numero de lugares recomendados' />
                <button onClick={formulaCos3}>Start</button>
                <ul>
                    {listaDestinos3.map((item, i) =>
                        <li>{item.destino}{item.valorK}</li>
                    )}
                </ul>
            </div>

        </div>
    );
}

export default DataReader;