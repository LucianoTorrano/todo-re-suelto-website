import addList from '../list-functions.js'
const url = "https://docs.google.com/spreadsheets/d/1Ny1UahHVK64Rrfnv5mgu7Xo5k4oDHrj1DLUHP9G1vxw/export?format=csv";
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
            if(row.frutosSecos1 !== ''){
                col1.push(row.frutosSecos1);
            }
            if(row.frutosSecos2 !== ''){
                col2.push(row.frutosSecos2);
            }
            if(row.frutosSecos3 !== ''){
                col3.push(row.frutosSecos3);
            }
        })
        loadingText.style.display='none';
        addList(col1);
        addList(col3);
        addList(col2);
    });