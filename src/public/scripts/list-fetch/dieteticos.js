import addList from '../list-functions.js'
const url = "https://docs.google.com/spreadsheets/d/1fwy40gpxOFK4pcVhZpvXXzFRr-HPsZYPhydAWHXYHAU/export?format=csv";
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
            if(row.dietetica1 !== ''){
                col1.push(row.dietetica1);
            }
            if(row.dietetica2 !== ''){
                col2.push(row.dietetica2);
            }
            if(row.dietetica3 !== ''){
                col3.push(row.dietetica3);
            }
            if(row.dietetica4 !== ''){
                col4.push(row.dietetica4);
            }
        })
        loadingText.style.display='none';
        addList(col2);
        addList(col3);
        addList(col1);
        addList(col4);
    });