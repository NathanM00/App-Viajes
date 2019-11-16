import React from 'react'
import Papa from 'papaparse'
import { ListItem, List, ListItemAvatar, ListItemText, Divider, Avatar } from '@material-ui/core';

function DataReader() {

    const [rows, setRows] = React.useState([]);
    const [selectIndex, setSelectedIndex] = React.useState('');
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

    var newArray = Object.assign(rows);
    let objetoA;
    let objetoB;
    var nuevosK = [];
    const [listaOrdenados, setListaOrdenados] = React.useState([]);
    const [indexLista, setIndexLista] = React.useState('0');
    let selected = null;
    if (selectIndex !== '') selected = newArray[selectIndex];

    function handleChange(event) {
        setSelectedIndex(event.target.value);
    }

    function handleChangeText(event) {
        setIndexLista(event.target.value);
    }

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
        console.log(temp);
        
        var promedio = [];
        promedio[37] = 0;
        var ordenado;

        for (let index = 0; index < promedio.length; index++) {
            promedio[index] = 0;
        }
        for (let index = 0; index < temp.length; index++) {
            ordenado = temp[index].info;
            console.log(ordenado);
            for (let y = 1; y < ordenado.length; y++) {
                promedio[y] += parseInt(ordenado[y]);
            }
        }
        for (let index = 0; index < promedio.length; index++) {
            promedio[index] = parseInt(promedio[index] / temp.length);
        }
        // Este promedio es el perfil grupal de las personas que salen en la primer pregunta sin contarte a ti mismo xd
        console.log(promedio);

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

                <input onChange={handleChangeText} type='number' />
                <button onClick={formulaCos}>Start</button>

                <ul>
                    {listaOrdenados.map((item, i) =>
                        <li>{item.persona}{item.valorK}</li>
                    )}
                </ul>
            </div>

            <div>
                <h1>Pregunta 2</h1>
                <button onClick={formulaCos2}>Start</button>
            </div>

        </div>
    );
}

export default DataReader;