import addList from '../list-functions.js'
const url = "https://docs.google.com/spreadsheets/d/1QXB4GkWMmZ0SnWPNboiW3qgEyK02MSpJZIj9RH5mL7g/export?format=csv";
const loadingText = document.getElementById('cargando');

fetch(url)
    .then(result =>result.text())
    .then(csvtext =>{ 
        return csv().fromString(csvtext);
    }).then(data =>{
        let col1 = [];
        let col2 = [];
        let col3 = [];
        let col4 = [];
        let col5 =[]
        data.forEach(row =>{
            if(row.desayunos1 !== ''){
                col1.push(row.desayunos1);
            }
            if(row.desayunos2 !== ''){
                col2.push(row.desayunos2);
            }
            if(row.desayunos3 !== ''){
                col3.push(row.desayunos3);
            }
            if(row.desayunos4 !== ''){
                col4.push(row.desayunos4);
            }
            if(row.desayunos5 !== ''){
                col5.push(row.desayunos5);
            }
        })
        loadingText.style.display='none';
        addList(col1);
        addList(col2);
        addList(col3);
        addList(col5);
        addList(col4);
    });