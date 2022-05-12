import addList from '../list-functions.js'
const url = "https://docs.google.com/spreadsheets/d/1cxUPucgKwpP4CBiEOGi8bZaPKSo5BBp2hTOmiCI5LNs/export?format=csv";
const loadingText = document.getElementById('cargando');

fetch(url)
    .then(result =>result.text())
    .then(csvtext =>{ 
        return csv().fromString(csvtext);
    }).then(data =>{
        let col1 = [];
        let col2 = [];
        data.forEach(row =>{
            if(row.semillas1 !== ''){
                col1.push(row.semillas1);
            }
            if(row.semillas2 !== ''){
                col2.push(row.semillas2);
            }
        })
        loadingText.style.display='none';
        addList(col1);
        addList(col2);
    });