import addList from '../list-functions.js'
const url = "https://docs.google.com/spreadsheets/d/1LtsG-i6gEU5XgdCSHRwrdpDjw7RmmLd3al9MNIGoqX4/export?format=csv";
const loadingText = document.getElementById('cargando');

fetch(url)
    .then(result =>result.text())
    .then(csvtext =>{ 
        return csv().fromString(csvtext);
    }).then(data =>{
        let col1 = [];
        data.forEach(row =>{
            if(row.hierbas1 !== ''){
                col1.push(row.hierbas1);
            }
        })
        loadingText.style.display='none';
        addList(col1);
    });