import addList from '../list-functions.js'
const url = "https://docs.google.com/spreadsheets/d/1oHWWbUl3vUAb1nHmpSORb459AOVm05jZ6AmR0SbPmVM/export?format=csv";
const loadingText = document.getElementById('cargando');

fetch(url)
    .then(result =>result.text())
    .then(csvtext =>{ 
        return csv().fromString(csvtext);
    }).then(data =>{
        let col1 = [];
        let col2 = [];
        data.forEach(row =>{
            if(row.celiacos1 !== ''){
                col1.push(row.celiacos1);
            }
            if(row.veganos1 !== ''){
                col2.push(row.veganos1);
            }
        })
        loadingText.style.display='none';
        addList(col1);
        addList(col2);
    });