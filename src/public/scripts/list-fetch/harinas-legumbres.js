import addList from '../list-functions.js'
const url = "https://docs.google.com/spreadsheets/d/1W-tQDXDvD4_p5fWcbBYb_ZMgdnCN7w6CgvIZna0kmUE/export?format=csv";
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
            if(row.harinas1 !== ''){
                col1.push(row.harinas1);
            }
            if(row.harinas2 !== ''){
                col2.push(row.harinas2);
            }
            if(row.legumbres1 !== ''){
                col3.push(row.legumbres1);
            }
            if(row.legumbres2 !== ''){
                col4.push(row.legumbres2);
            }
        })
        loadingText.style.display='none';
        addList(col1);
        addList(col2);
        addList(col4);
        addList(col3);        
    });