import React from 'react'
import Papa from 'papaparse'
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { fb } from '../../utils/firebase';
import User from '../User/User';
import Destinations from '../Destinations/Destinations';
import People from '../People/People';
import Music from '../Music/Music';

function DataReader(props) {

    const classes = useStyles();

    const [rows, setRows] = React.useState([]);
    const [rows2, setRows2] = React.useState([]);
    const [rows3, setRows3] = React.useState([]);

    var user = fb.auth().currentUser;
    var db = fb.firestore();

    //lectura de base de datos de Gente
    React.useEffect(() => {
        async function getData() {
            const response = await fetch('/resources/dataBaseViajes.csv');
            const reader = response.body.getReader();
            const result = await reader.read();
            const decoder = new TextDecoder('utf-8');
            const csv = decoder.decode(result.value);
            const results = Papa.parse(csv, { header: true });
            const rows = results.data;
            setRows(rows);
        }
        getData();
    }, []);

    //lectura de base de datos de Destinos
    React.useEffect(() => {
        async function getData() {
            const response = await fetch('/resources/dataBaseDestinos.csv');
            const reader = response.body.getReader();
            const result = await reader.read();
            const decoder = new TextDecoder('utf-8');
            const csv = decoder.decode(result.value);
            const results = Papa.parse(csv, { header: true });
            const rows = results.data;
            setRows2(rows);
        }
        getData();
    }, [])

    //lectura de base de datos de hibrida
    React.useEffect(() => {
        async function getData() {
            const response = await fetch('/resources/dataBaseMixed.csv');
            const reader = response.body.getReader();
            const result = await reader.read();
            const decoder = new TextDecoder('utf-8');
            const csv = decoder.decode(result.value);
            const results = Papa.parse(csv, { header: true });
            const rows = results.data;
            setRows3(rows);
        }
        getData();
    }, []);

    var newArray = Object.assign(rows);
    var newArray2 = Object.assign(rows2);
    var newArray3 = Object.assign(rows3);

    let objetoA;
    let objetoB;
    var nuevosK = [];

    const [selectIndex, setSelectedIndex] = React.useState('');
    const [selectIndex2, setSelectedIndex2] = React.useState('');
    const [selectIndex3, setSelectedIndex3] = React.useState('');
    const [selectIndex4, setSelectedIndex4] = React.useState('');
    const [selectIndex5, setSelectedIndex5] = React.useState('');
    const [selectIndex6, setSelectedIndex6] = React.useState('');
    const [selectIndex7, setSelectedIndex7] = React.useState('');

    const [listaOrdenados, setListaOrdenados] = React.useState([]);
    const [listaOrdenados2, setListaOrdenados2] = React.useState([]);
    const [listaOrdenados4, setListaOrdenados4] = React.useState([]);
    const [listaOrdenados5, setListaOrdenados5] = React.useState([]);
    const [listaOrdenados6, setListaOrdenados6] = React.useState([]);
    const [listaOrdenados7, setListaOrdenados7] = React.useState([]);

    const [listaDestinos2, setListaDestinos2] = React.useState([]);
    const [listaDestinos3, setListaDestinos3] = React.useState([]);
    const [listaDestinos5, setListaDestinos5] = React.useState([]);
    const [listaDestinos6, setListaDestinos6] = React.useState([]);
    const [listaDestinos6b, setListaDestinos6b] = React.useState([]);
    const [listaDestinos7, setListaDestinos7] = React.useState([]);

    const [listaCanciones7, setListaCanciones7] = React.useState([]);

    const [indexLista, setIndexLista] = React.useState('0');
    const [indexLista2, setIndexLista2] = React.useState('0');
    const [indexLista2b, setIndexLista2b] = React.useState('0');
    const [indexLista3, setIndexLista3] = React.useState('0');
    const [indexLista4, setIndexLista4] = React.useState('0');
    const [indexLista5, setIndexLista5] = React.useState('0');
    const [indexLista5b, setIndexLista5b] = React.useState('0');
    const [indexLista6, setIndexLista6] = React.useState('0');
    const [indexLista6b, setIndexLista6b] = React.useState('0');
    const [indexLista6c, setIndexLista6c] = React.useState('0');
    const [indexLista7, setIndexLista7] = React.useState('0');
    const [indexLista7b, setIndexLista7b] = React.useState('0');
    const [indexLista7c, setIndexLista7c] = React.useState('0');

    let selected = null;
    if (selectIndex !== '') selected = newArray[selectIndex];

    let selected2 = null;
    if (selectIndex2 !== '') selected2 = newArray[selectIndex2];

    let selected3 = null;
    if (selectIndex3 !== '') selected3 = newArray[selectIndex3];

    let selected4 = null;
    if (selectIndex4 !== '') selected4 = newArray2[selectIndex4];

    let selected5 = null;
    if (selectIndex5 !== '') selected5 = newArray2[selectIndex5];

    let selected6 = null;
    if (selectIndex6 !== '') selected6 = newArray[selectIndex6];

    let selected7 = null;
    if (selectIndex7 !== '') selected7 = newArray[selectIndex7];

    //Funciones donde dan los cambios de valor en los inputss
    function handleChange(event) {
        setSelectedIndex(event.target.value);
    }

    function handleChange2(event) {
        setSelectedIndex2(event.target.value);
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

    function handleChange7(event) {
        setSelectedIndex7(event.target.value);
    }

    //Los que estan relacionados a personas
    function handleAcompañantes(event) {
        setIndexLista(event.target.value);
    }

    function handleAcompañantes2(event) {
        setIndexLista2(event.target.value);
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

    function handleAcompañantes7(event) {
        setIndexLista7(event.target.value);
    }

    //Los que estan relacionados a lugares
    function handleLugares2(event) {
        setIndexLista2b(event.target.value);
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

    function handleLugares7(event) {
        setIndexLista7b(event.target.value);
    }

    //los que estan relacionados a las canciones
    function handleCanciones7(event) {
        setIndexLista7c(event.target.value);
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
                    foto: newArray[index].foto,
                    persona: newArray[index].nombres,
                    valorK: valorFinalK + "%",
                    info: objetoB,
                });
            }

        }
        setListaOrdenados(nuevosK.sort((a, b) => (a.valorK > b.valorK) ? - 1 : 1).slice(0, indexLista));
        console.log(listaOrdenados);
    }

    function formulaCos2() {
        objetoA = Object.values(selected2).slice(1);

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
                    foto: newArray[index].foto,
                    persona: newArray[index].nombres,
                    valorK: valorFinalK + "%",
                    info: objetoB,
                });
            }

        }
        setListaOrdenados2(nuevosK.sort((a, b) => (a.valorK > b.valorK) ? - 1 : 1).slice(0, indexLista2));
    }

    function formulaCos2b() {
        objetoA = Object.values(selected2).slice(1);

        var yoMismo = {
            info: objetoA,
        }

        let temp = listaOrdenados2;
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

        let objetoC = Object.values(perfilGrupal).slice(2);
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
                    foto: newArray2[index].foto,
                    destino: newArray2[index].Destino,
                    valorK: valorFinalK + "%",
                    info: objetoD,
                });
            }
        }
        setListaDestinos2(nuevosK.sort((a, b) => (a.valorK > b.valorK) ? - 1 : 1).slice(0, indexLista2b));
        console.log(listaDestinos2);
    }

    function formulaCos3() {
        let objetoA3 = Object.values(selected3).slice(1);

        for (let index = 0; index < newArray2.length; index++) {
            objetoB = Object.values(newArray2[index]).slice(2);

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
                    foto: newArray2[index].foto,
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
                    foto: newArray[index].foto,
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

        for (let index = 0; index < newArray2.length; index++) {
            objetoB = Object.values(newArray2[index]).slice(2);

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
                    foto: newArray2[index].foto,
                    destino: newArray2[index].Destino,
                    valorK: valorFinalK + "%",
                    info: objetoB,
                });
            }

        }
        setListaDestinos5(nuevosK.sort((a, b) => (a.valorK > b.valorK) ? - 1 : 1).slice(0, indexLista5));
    }

    function formulaCos5b() {
        objetoA = Object.values(selected5);
        var yoMismo = {
            foto: objetoA[0],
            destino: objetoA[1],
            info: objetoA.slice(2),
            valorK: "100%",
        }

        let temp = listaDestinos5;
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
                    foto: newArray[index].foto,
                    persona: newArray[index].nombres,
                    valorK: valorFinalK + "%",
                    info: objetoD,
                });
            }
        }
        setListaOrdenados5(nuevosK.sort((a, b) => (a.valorK > b.valorK) ? - 1 : 1).slice(0, indexLista5b));
        console.log(listaOrdenados5);
    }

    function formulaCos6() {
        let objetoA = Object.values(selected6).slice(1);

        for (let index = 0; index < newArray2.length; index++) {
            objetoB = Object.values(newArray2[index]).slice(2);

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
                    foto: newArray2[index].foto,
                    destino: newArray2[index].Destino,
                    valorK: valorFinalK + "%",
                    info: objetoB,
                });
            }

        }
        setListaDestinos6(nuevosK.sort((a, b) => (a.valorK > b.valorK) ? - 1 : 1).slice(0, indexLista6));
    }

    function formulaCos6b() {
        objetoA = Object.values(listaDestinos6[0].info).slice(1);
        for (let index = 0; index < newArray2.length; index++) {
            objetoB = Object.values(newArray2[index]).slice(2);

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
                    foto: newArray2[index].foto,
                    destino: newArray2[index].Destino,
                    valorK: valorFinalK + "%",
                    info: objetoB,
                });
            }

        }
        setListaDestinos6b(nuevosK.sort((a, b) => (a.valorK > b.valorK) ? - 1 : 1).slice(0, indexLista6b));
    }

    function formulaCos6c() {
        objetoA = Object.values(listaDestinos6[0].info).slice(1);

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
                    foto: newArray[index].foto,
                    persona: newArray[index].nombres,
                    valorK: valorFinalK + "%",
                    info: objetoD,
                });
            }
        }
        setListaOrdenados6(nuevosK.sort((a, b) => (a.valorK > b.valorK) ? - 1 : 1).slice(0, indexLista6c));
    }

    function formulaCos7() {
        objetoA = Object.values(selected7).slice(1);

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
                    foto: newArray[index].foto,
                    persona: newArray[index].nombres,
                    valorK: valorFinalK + "%",
                    info: objetoB,
                });
            }

        }
        setListaOrdenados7(nuevosK.sort((a, b) => (a.valorK > b.valorK) ? - 1 : 1).slice(0, indexLista7));
    }

    function formulaCos7b() {
        objetoA = Object.values(selected7).slice(1);

        var yoMismo = {
            info: objetoA,
        }

        let temp = listaOrdenados7;
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
                    foto: newArray2[index].foto,
                    destino: newArray2[index].Destino,
                    valorK: valorFinalK + "%",
                    info: objetoD,
                });
            }
        }
        setListaDestinos7(nuevosK.sort((a, b) => (a.valorK > b.valorK) ? - 1 : 1).slice(0, indexLista7b));
    }

    function formulaCos7c() {

        let temp = listaDestinos7;

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
                    foto: newArray3[index].foto,
                    cancion: newArray3[index].Canciones,
                    valorK: valorFinalK + "%",
                    info: objetoD,
                });
            }
        }
        setListaCanciones7(nuevosK.sort((a, b) => (a.valorK > b.valorK) ? - 1 : 1).slice(0, indexLista7c));
    }

    function handleSavePlan() {
        let acompanantes = 'Solo tu haces parte de este plan.';
        let canciones = 'Ninguna cancion en el plan.';
        let lugares = 'Ningun destino en el plan.';

        if (props.question === 1) {
            acompanantes = listaOrdenados;
        } else if (props.question === 2) {
            acompanantes = listaOrdenados2;
            lugares = listaDestinos2;
        } else if (props.question === 3) {
            lugares = listaDestinos3;
        } else if (props.question === 4) {
            acompanantes = listaOrdenados4;
            lugares = Object.values(selected4);
        } else if (props.question === 5) {
            acompanantes = listaOrdenados5;
            lugares = listaDestinos5;
        } else if (props.question === 6) {
            acompanantes = listaOrdenados6;
            lugares = listaDestinos6b;
        } else if (props.question === 7) {
            acompanantes = listaOrdenados7;
            canciones = listaCanciones7;
            lugares = listaDestinos7;
        }

        var ref = db.collection('plans').doc(user.uid);

        var docData = {
            partners: acompanantes,
            songs: canciones,
            places: lugares,
            isPlanned: true,
        };

        ref.get().then(function (doc) {
            if (doc.exists) {
                console.log("Document collection:", doc.data().counter);
                var ownCounter = doc.data().counter + 1;
                ref.update({
                    counter: fb.firestore.FieldValue.increment(1)
                });

                ref.collection("userPlans").doc("" + ownCounter).set(docData).then(function () {
                    console.log("Plan exitoso");
                }).catch(function (error) {
                    console.error("Error writing document: ", error);
                });

            } else {
                ref.set({
                    counter: 1,
                }).then(function () {
                    console.log("primer contador exitoso");
                }).catch(function (error) {
                    console.error("Error writing document: ", error);
                });

                ref.collection("userPlans").doc("1").set(docData).then(function () {
                    console.log("Primer plan exitoso");
                }).catch(function (error) {
                    console.error("Error writing document: ", error);
                });
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });

    }

    if (props.question !== 8) {
        return (
            <section className={classes.main}>
                {props.question === 1 && <div className={classes.main}>
                    <div className={classes.inputs}>
                        <section className={classes.input}>
                            <div className={classes.instruction}>
                                <div className={classes.mandalorian}></div>
                                <p className={classes.inputText}>Escoge tu usuario.</p>
                            </div>

                            <div className={classes.edit}>
                                <select className={classes.inputUser} value={selectIndex} onChange={handleChange}>
                                    <option value="">-</option>

                                    {newArray.map((item, i) =>
                                        <option value={i} key={i}>{item.nombres}</option>
                                    )}
                                </select>
                                <div className={classes.dropBtn}></div>
                            </div>
                        </section>

                        <section className={classes.input}>
                            <div className={classes.instruction}>
                                <div className={classes.mandalorian}></div>
                                <p className={classes.inputText}>Escoge el número de personas para comparar.</p>
                            </div>

                            <input className={classes.inputNumber} onChange={handleAcompañantes} type='number' placeholder='Número de acompañantes' />

                            <button className={classes.startBtn} onClick={formulaCos}>Start</button>
                        </section>

                    </div>

                    <div className={classes.user}>
                        {selected && <User
                            foto={selected.foto}
                            nombre={selected.nombres}
                            message='Tu y estas personas tienen gustos similares.' />}
                    </div>

                    <div className={classes.recomendation}>
                        <ul className={classes.rcommendedList}>
                            {listaOrdenados.map((item, i) =>
                                <People
                                    foto={item.foto}
                                    persona={item.persona}
                                    valorK={item.valorK} />
                            )}
                        </ul>
                    </div>

                    <Button className={classes.savePlan} onClick={handleSavePlan}>Guardar plan</Button>

                </div>
                }

                {props.question === 2 && <div className={classes.main2}>
                    <div className={classes.inputs}>
                        <section className={classes.input}>
                            <div className={classes.instruction}>
                                <div className={classes.mandalorian}></div>
                                <p className={classes.inputText}>Escoge tu usuario.</p>
                            </div>

                            <select className={classes.inputUser} value={selectIndex2} onChange={handleChange2}>
                                <option value="">-</option>

                                {newArray.map((item, i) =>
                                    <option value={i} key={i}>{item.nombres}</option>
                                )}
                            </select>
                        </section>

                        <section className={classes.input}>
                            <div className={classes.instruction}>
                                <div className={classes.mandalorian}></div>
                                <p className={classes.inputText}>Escoge el número de acompañantes.</p>
                            </div>

                            <input className={classes.inputNumber} onChange={handleAcompañantes2} type='number' placeholder='Numero de acompañantes' />
                            <button className={classes.startBtn} onClick={formulaCos2}>Start</button>
                        </section>

                        <section className={classes.input}>
                            <div className={classes.instruction}>
                                <div className={classes.mandalorian}></div>
                                <p className={classes.inputText}>Escoge el número de lugares.</p>
                            </div>

                            <input className={classes.inputNumber} onChange={handleLugares2} type='number' placeholder='Número de lugares recomendados' />
                            <button className={classes.startBtn} onClick={formulaCos2b}>Start</button>
                        </section>
                    </div>

                    <div className={classes.user2}>
                        {selectIndex2 && <div className={classes.userInfo}>
                            <img className={classes.selectedImage} src={selected2.foto} />
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

                    <div className={classes.recomendation}>
                        <ul className={classes.rcommendedListPlace}>
                            {listaDestinos2.map((item, i) =>
                                <Destinations
                                    foto={item.foto}
                                    destino={item.destino}
                                    valork={item.valorK} />
                            )}
                        </ul>
                    </div>

                    <Button className={classes.savePlan} onClick={handleSavePlan}>Guardar plan</Button>

                </div>
                }

                {props.question === 3 && <div className={classes.main3}>
                    <div className={classes.inputs}>
                        <section className={classes.input}>
                            <div className={classes.instruction}>
                                <div className={classes.mandalorian}></div>
                                <p className={classes.inputText}>Escoge tu usuario.</p>
                            </div>

                            <select className={classes.inputUser} value={selectIndex3} onChange={handleChange3}>
                                <option value="">-</option>

                                {newArray.map((item, i) =>
                                    <option value={i} key={i}>{item.nombres}</option>
                                )}
                            </select>
                        </section>

                        <section className={classes.input}>
                            <div className={classes.instruction}>
                                <div className={classes.mandalorian}></div>
                                <p className={classes.inputText}>Escoge el número de destinos.</p>
                            </div>

                            <input className={classes.inputNumber} onChange={handleLugares3} type='number' placeholder='Numero de lugares recomendados' />
                            <button className={classes.startBtn} onClick={formulaCos3}>Start</button>
                        </section>

                    </div>

                    <div className={classes.user}>
                        {selected3 && <User
                            foto={selected3.foto}
                            nombre={selected3.nombres}
                            message='Estos destinos son ideales para ti.' />}
                    </div>

                    <div className={classes.recomendation}>
                        <ul className={classes.rcommendedListPlace}>
                            {listaDestinos3.map((item, i) =>
                                <Destinations
                                    foto={item.foto}
                                    destino={item.destino}
                                    valork={item.valorK} />
                            )}
                        </ul>
                    </div>

                    <Button className={classes.savePlan} onClick={handleSavePlan}>Guardar plan</Button>
                </div>
                }

                {props.question === 4 && <div className={classes.main4}>
                    <div className={classes.inputs}>
                        <section className={classes.input}>
                            <div className={classes.instruction}>
                                <div className={classes.mandalorian}></div>
                                <p className={classes.inputText}>Escoge tu destino.</p>
                            </div>

                            <select className={classes.inputUser} value={selectIndex4} onChange={handleChange4}>
                                <option value="">-</option>

                                {newArray2.map((item, i) =>
                                    <option value={i} key={i}>{item.Destino}</option>
                                )}
                            </select>
                        </section>

                        <section className={classes.input}>
                            <div className={classes.instruction}>
                                <div className={classes.mandalorian}></div>
                                <p className={classes.inputText}>Escoge el número de personas.</p>
                            </div>

                            <input className={classes.inputNumber} onChange={handleAcompañantes4} type='number' placeholder='Numero de personas' />
                            <button className={classes.startBtn} onClick={formulaCos4}>Start</button>
                        </section>

                    </div>

                    {selected4 && <User
                        nombre={selected4.Destino}
                        message='Este destino es ideal para ti y este grupo de amigos.' />}

                    <div className={classes.recomendation}>
                        <ul className={classes.rcommendedList}>
                            {listaOrdenados4.map((item, i) =>
                                <People
                                    foto={item.foto}
                                    persona={item.persona}
                                    valorK={item.valorK} />
                            )}
                        </ul>
                    </div>

                    <Button className={classes.savePlan} onClick={handleSavePlan}>Guardar plan</Button>
                </div>
                }
                {props.question === 5 && <div className={classes.main5}>
                    <div className={classes.inputs}>
                        <section className={classes.input}>
                            <div className={classes.instruction}>
                                <div className={classes.mandalorian}></div>
                                <p className={classes.inputText}>Escoge tu destino.</p>
                            </div>

                            <select className={classes.inputUser} value={selectIndex5} onChange={handleChange5}>
                                <option value="">-</option>

                                {newArray2.map((item, i) =>
                                    <option value={i} key={i}>{item.Destino}</option>
                                )}
                            </select>
                        </section>

                        <section className={classes.input}>
                            <div className={classes.instruction}>
                                <div className={classes.mandalorian}></div>
                                <p className={classes.inputText}>Escoge el número de destinos para comparar.</p>
                            </div>

                            <input className={classes.inputNumber} onChange={handleLugares5} type='number' placeholder='Numero de destinos similares' />
                            <button className={classes.startBtn} onClick={formulaCos5}>Start</button>
                        </section>

                        <section className={classes.input}>
                            <div className={classes.instruction}>
                                <div className={classes.mandalorian}></div>
                                <p className={classes.inputText}>Escoge el número de personas para este destino.</p>
                            </div>

                            <input className={classes.inputNumber} onChange={handleAcompañantes5} type='number' placeholder='Numero de personas' />
                            <button className={classes.startBtn} onClick={formulaCos5b}>Start</button>
                        </section>
                    </div>

                    {selected5 && <User
                        nombre={selected5.Destino}
                        message='Este destino es parecido a estos otros.' />}

                    <div className={classes.recomendation}>
                        <ul className={classes.rcommendedListPlace}>
                            {listaDestinos5.map((item, i) =>
                                <Destinations
                                    foto={item.foto}
                                    destino={item.destino}
                                    valork={item.valorK} />
                            )}
                        </ul>
                    </div>

                    <p className={classes.txtRcommend}>Posibles Interesados</p>
                    <div className={classes.recomendation}>
                        <ul className={classes.rcommendedList}>
                            {listaOrdenados5.map((item, i) =>
                                <People
                                    foto={item.foto}
                                    persona={item.persona}
                                    valorK={item.valorK} />
                            )}
                        </ul>
                    </div>

                    <Button className={classes.savePlan} onClick={handleSavePlan}>Guardar plan</Button>
                </div>
                }

                {props.question === 6 && <div className={classes.main6}>
                    <div className={classes.inputs}>
                        <section className={classes.input}>
                            <div className={classes.instruction}>
                                <div className={classes.mandalorian}></div>
                                <p className={classes.inputText}>Escoge tu usuario.</p>
                            </div>

                            <select className={classes.inputUser} value={selectIndex6} onChange={handleChange6}>
                                <option value="">-</option>

                                {newArray.map((item, i) =>
                                    <option value={i} key={i}>{item.nombres}</option>
                                )}
                            </select>
                            <button className={classes.startBtn} onClick={formulaCos6}>Start</button>
                        </section>

                        <section className={classes.input}>
                            <div className={classes.instruction}>
                                <div className={classes.mandalorian}></div>
                                <p className={classes.inputText}>Escoge el número de destinos similares.</p>
                            </div>

                            <input className={classes.inputNumber} onChange={handleLugares6} type='number' placeholder='Numero de destinos similares' />
                            <button className={classes.startBtn} onClick={formulaCos6b}>Start</button>
                        </section>

                        <section className={classes.input}>
                            <div className={classes.instruction}>
                                <div className={classes.mandalorian}></div>
                                <p className={classes.inputText}>Escoge el número de personas.</p>
                            </div>

                            <input className={classes.inputNumber} onChange={handleAcompañantes6} type='number' placeholder='Numero de personas' />
                            <button className={classes.startBtn} onClick={formulaCos6c}>Start</button>
                        </section>
                    </div>

                    {selected6 && <User
                        foto={selected6.foto}
                        nombre={selected6.nombres}
                        message='Este destino es el ideal para ti.' />}

                    <div className={classes.recomendation}>
                        <ul className={classes.rcommendedListPlace}>
                            {listaDestinos6.map((item, i) =>
                                <Destinations
                                    foto={item.foto}
                                    destino={item.destino}
                                    valork={item.valorK} />
                            )}
                        </ul>
                    </div>

                    <p className={classes.txtRcommend}>Destinos Similares.</p>
                    <div className={classes.recomendation}>
                        <ul className={classes.rcommendedListPlace}>
                            {listaDestinos6b.map((item, i) =>
                                <Destinations
                                    foto={item.foto}
                                    destino={item.destino}
                                    valork={item.valorK} />
                            )}
                        </ul>
                    </div>

                    <p className={classes.txtRcommend}>De acuerdo a esos destinos, ellos son los posibles interesados.</p>
                    <div className={classes.recomendation}>
                        <ul className={classes.rcommendedList}>
                            {listaOrdenados6.map((item, i) =>
                                <People
                                    foto={item.foto}
                                    persona={item.persona}
                                    valorK={item.valorK} />
                            )}
                        </ul>
                    </div>

                    <Button className={classes.savePlan} onClick={handleSavePlan}>Guardar plan</Button>
                </div>
                }
                {props.question === 7 && <div className={classes.main7}>
                    <div className={classes.inputs}>
                        <section className={classes.input7}>
                            <div className={classes.instruction}>
                                <div className={classes.mandalorian}></div>
                                <p className={classes.inputText}>Escoge tu usuario.</p>
                            </div>

                            <select className={classes.inputUser7} value={selectIndex7} onChange={handleChange7}>
                                <option value="">-</option>

                                {newArray.map((item, i) =>
                                    <option value={i} key={i}>{item.nombres}</option>
                                )}
                            </select>
                        </section>

                        <section className={classes.input7}>
                            <div className={classes.instruction}>
                                <div className={classes.mandalorian}></div>
                                <p className={classes.inputText}>Escoge el número de personas.</p>
                            </div>

                            <input className={classes.inputNumber7} onChange={handleAcompañantes7} type='number' placeholder='Numero de acompañantes' />
                            <button className={classes.startBtn7} onClick={formulaCos7}>Start</button>
                        </section>
                        
                        <section className={classes.input7}>
                            <div className={classes.instruction}>
                                <div className={classes.mandalorian}></div>
                                <p className={classes.inputText}>Escoge el número de lugares.</p>
                            </div>

                            <input className={classes.inputNumber7} onChange={handleLugares7} type='number' placeholder='Numero de lugares recomendados' />
                            <button className={classes.startBtn7} onClick={formulaCos7b}>Start</button>
                        </section>
        
                        <section className={classes.input7}>
                            <div className={classes.instruction}>
                                <div className={classes.mandalorian}></div>
                                <p className={classes.inputText}>Escoge el número de canciones.</p>
                            </div>

                            <input className={classes.inputNumber} onChange={handleCanciones7} type='number' placeholder='Numero de canciones' />
                            <button className={classes.startBtn7} onClick={formulaCos7c}>Start</button>
                        </section>
                    </div>

                    <div className={classes.user2}>
                        {selected7 && <div className={classes.userInfo}>
                            <img className={classes.selectedImage} src={selected7.foto} />
                            <section className={classes.text}>
                                <p className={classes.selectedName}>{selected7.nombres}</p>
                                <p className={classes.message}>Tu y tu grupo de amigos podrian ir a estos lugares.</p>
                            </section>
                        </div>}

                        <div className={classes.group}>
                            <p className={classes.yourGroup}>Tu grupo.</p>
                            <ul className={classes.groupFotos}>
                                {listaOrdenados7.map((item, i) =>
                                    <div className={classes.groupMember}>
                                        <img className={classes.imagePersonRecomGroup} src={item.foto} />
                                        <p className={classes.namePGroup}>{item.persona} {item.valorK}</p>
                                    </div>
                                )}
                            </ul>
                        </div>
                    </div>

                    <div className={classes.recomendation}>
                        <ul className={classes.rcommendedListPlace}>
                            {listaDestinos7.map((item, i) =>
                                <Destinations
                                    foto={item.foto}
                                    destino={item.destino}
                                    valork={item.valorK} />
                            )}
                        </ul>
                    </div>

                    <p className={classes.txtRcommend}>Canciones recomendadas para estos destinos.</p>
                    <ul className={classes.rcommendedMusic}>
                        {listaCanciones7.map((item, i) =>
                            <Music
                                foto={item.foto}
                                cancion={item.cancion}
                                valork={item.valorK} />
                        )}
                    </ul>
                    <Button className={classes.savePlan} onClick={handleSavePlan}>Guardar plan</Button>
                </div>
                }
            </section>
        );
    } else {
        return <div></div>;
    }
}

const useStyles = makeStyles(theme => ({
    main: {
        width: '100%',
        height: '100%',
    },

    inputs: {
        //position: 'fixed',
        //zIndex: 1,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: '15px',
        paddingBottom: '15px',
        paddingLeft: '30px',
        paddingRight: '30px',
        //width: '77.6%',
        width: '100%',
        height: '15%',
        background: '#3E94F9',
        borderRadius: '14px',
        marginBottom: '40px',
    },

    input: {
        marginRight: '35px',
    },

    instruction: {
        marginBottom: 15,
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

    inputUser: {
        height: 40,
        width: 250,
        background: '#FFFFFF',
        borderRadius: '26.5px',
        padding: 10,
        border: 'none',
        outline: 0,

        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontSize: '15px',
        lineHeight: '29px',

        color: '#727272',
    },

    /*dropBtn: {
        position: 'absolut',
        width: 40,
        height: 40,
        borderRadius: '100%',
        background: '#FFDA15',
    },*/

    /*edit: {
        paddingLeft: 10,
        display: 'flex',
        alignItems: 'center',
        height: 40,
        width: 250,
        borderRadius: '26.5px',
        background: '#FFFFFF',
    },*/

    inputNumber: {
        height: 40,
        width: 220,
        background: '#FFFFFF',
        borderRadius: '26.5px',
        border: 'none',
        padding: 15,

        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontSize: '15px',
        lineHeight: '29px',

        color: '#727272',

    },

    startBtn: {
        height: 40,
        width: 100,
        background: '#FFDA15',
        borderRadius: '26.5px',
        border: 'none',
        marginLeft: 35,

        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '15px',
        lineHeight: '29px',

        color: '#3E94F9',
    },

    savePlan: {
        height: 60,
        width: 220,
        background: '#FFDA15',
        borderRadius: '26.5px',
        border: 'none',
        marginTop: 25,

        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '15px',
        lineHeight: '29px',

        color: '#3E94F9',
    },

    user: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        width: '100%',
        height: '20%',
        background: '#FFFFFF',
        borderRadius: '14px',
        padding: '15px',
    },

    userInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    text: {
        width: '50%',
    },

    selectedImage: {
        width: '26%',
        marginRight: 20,
    },

    selectedName: {
        margin: 0,
        marginBottom: 15,
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '25px',
        lineHeight: '43px',

        color: '#5C5C5C',
    },

    message: {
        margin: 0,
        fontFamily: 'Lato',
        fontStyle: 'normal',
        //fontWeight: 'bold',
        fontSize: '22px',
        lineHeight: '30px',

        color: '#727272',
    },

    recomendation: {
        width: '100%',
        height: '35%',
        marginTop: 15,

    },

    rcommendedList: {
        height: '100%',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
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

    //--------------Pregunta2------------------------

    main2: {
        width: '100%',
        height: '100%',
    },

    groupFotos: {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
        marginBottom: 0,
    },

    user2: {
        display: 'flex',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        width: '100%',
        height: '25%',
        background: '#FFFFFF',
        borderRadius: '14px',
        padding: 15,
        paddingLeft: 30,
        paddingRight: 30,
    },

    imagePersonRecomGroup: {
        width: '60%',
        margin: 0,
    },

    yourGroup: {
        margin: 0,
        marginLeft: 15,
        marginBottom: 15,
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontSize: '20px',
        lineHeight: '34px',

        color: '#727272',

    },

    groupMember: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        marginRight: 5,
    },

    namePGroup: {
        margin: 0,
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '15px',
        lineHeight: '43px',

        color: '#5C5C5C',
    },

    rcommendedListPlace: {
        height: '100%',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },

    //--------------Pregunta3------------------------

    main3: {
        width: '100%',
        height: '100%',
    },

    //--------------Pregunta4------------------------

    main4: {
        width: '100%',
        height: '100%',
    },

    //--------------Pregunta5------------------------

    main5: {
        width: '100%',
        height: '100%',
    },

    //--------------Pregunta6------------------------

    main6: {
        width: '100%',
        height: '100%',
    },

    //--------------Pregunta7------------------------

    main7: {
        width: '100%',
        height: '100%',
    },

    input7: {
        marginRight: 30,
    },

    inputUser7: {
        height: 40,
        width: 200,
        background: '#FFFFFF',
        borderRadius: '26.5px',
        padding: 10,
        border: 'none',
        outline: 0,

        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontSize: '15px',
        lineHeight: '29px',

        color: '#727272',
    },

    inputNumber7: {
        height: 40,
        width: 200,
        background: '#FFFFFF',
        borderRadius: '26.5px',
        border: 'none',
        padding: 15,

        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontSize: '15px',
        lineHeight: '29px',

        color: '#727272',

    },

    rcommendedMusic: {
        height: '100%',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },

    txtRcommend: {
        margin: 0,
        marginTop: 20,
        marginBottom: 10,
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '34px',

        color: '#727272',
    },

    startBtn7: {
        height: 40,
        width: 60,
        background: '#FFDA15',
        borderRadius: '26.5px',
        border: 'none',
        marginLeft: 15,

        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '15px',
        lineHeight: '29px',

        color: '#3E94F9',
    },

}));

export default DataReader;