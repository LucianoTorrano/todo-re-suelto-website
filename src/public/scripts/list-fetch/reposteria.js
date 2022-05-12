import addList from '../list-functions.js'
const url = "https://docs.google.com/spreadsheets/d/18jRBPlEduYfrC_v-GmHoYDQQjO9EmDX7g0n-uquJ67E/export?format=csv";
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
        data.forEach(row =>{
            if(row.reposteria1 !== ''){
                col1.push(row.reposteria1);
            }
            if(row.reposteria2 !== ''){
                col2.push(row.reposteria2);
            }
            if(row.reposteria3 !== ''){
                col3.push(row.reposteria3);
            }
            if(row.reposteria4 !== ''){
                col4.push(row.reposteria4);
            }
        })
        loadingText.style.display='none';
        addList(col1);
        addList(col2);
        addList(col3);
        addList(col4);        
    });