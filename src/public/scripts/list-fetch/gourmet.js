import addList from '../list-functions.js'
const url = "https://docs.google.com/spreadsheets/d/1x9yZa45CezJtsC_3JIP4T2QSUiuxW2sq05-bMVFHdJM/export?format=csv";
const loadingText = document.getElementById('cargando');

fetch(url)
    .then(result =>result.text())
    .then(csvtext =>{ 
        return csv().fromString(csvtext);
    }).then(data =>{
        let col1 = [];
        let col2 = [];
        let col3 = [];
        data.forEach(row =>{
            if(row.gourmet1 !== ''){
                col1.push(row.gourmet1);
            }
            if(row.gourmet2 !== ''){
                col2.push(row.gourmet2);
            }
            if(row.gourmet3 !== ''){
                col3.push(row.gourmet3);
            }
        })
        loadingText.style.display='none';
        addList(col1);
        addList(col3);
        addList(col2);
    });