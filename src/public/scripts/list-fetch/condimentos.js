import addList from '../list-functions.js'
const url = "https://docs.google.com/spreadsheets/d/1EOTuFCLirHtuqJy_LXXJZ6-oIZNHp2oHEkPvdDRujYM/export?format=csv";
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
            if(row.condimentos1 !== ''){
                col1.push(row.condimentos1);
            }
            if(row.condimentos2 !== ''){
                col2.push(row.condimentos2);
            }
            if(row.condimentos3 !== ''){
                col3.push(row.condimentos3);
            }
        })
        loadingText.style.display='none';
        addList(col1);
        addList(col3);
        addList(col2);
    });