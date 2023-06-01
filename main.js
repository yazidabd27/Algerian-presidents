const id='1i62QOdmyPxfcPjBsanPSfygrkSQFor2PsCp7I2qk3iw';
const title='Sheet1';
const range='A1:F176';
const url=('https://docs.google.com/spreadsheets/d/'+id+'/gviz/tq?sheet='+title+'&range='+range);
let data;

fetch(url)
.then(res=>res.text())
.then(rep=>{
    data=JSON.parse(rep.substr(47).slice(0, -2));
})

const inputField=document.querySelector('input');
const btn=document.querySelector('button');
const Name=document.querySelector('.name i');
const Country=document.querySelector('.country i');
const Start=document.querySelector('.start i');
const End=document.querySelector('.end i');
const Duration=document.querySelector('.duration i');
const Info=document.querySelector('.info');

btn.onclick=()=>{
    if(inputField.value!='' && inputField.value>= -202 && inputField.value<= 2022){
        getName(inputField.value);
        inputField.value='';
    }
}

const getName=(year)=>{
    let lastCountry;
    data.table.rows.forEach(row => {
        if(row.c[0]){
            lastCountry=row.c[0].v;
        }

        if(row.c[3].v<=year && row.c[4].v>year){
            Name.textContent=row.c[2].v;
            Country.textContent= lastCountry;
            Start.textContent=row.c[3].v;
            End.textContent=row.c[4].v;
            Duration.textContent=row.c[5].v;
            Info.style.display='block';
        }
    });
}
