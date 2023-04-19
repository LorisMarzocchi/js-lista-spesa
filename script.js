
// Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.

// debugger;

const arrList = [
    'pomodori',
    'funghi',
    'latte',
    'gin',
    'caffè',
    'biscotti',
];

const listaSpesa = document.querySelector('#list');
  
  // newItem
  // const btn = document.addEventListener('#addBtn');
let i = 0;
function myFunction() {

    let nome = document.getElementById("myText").value;
    arrList.push(nome);
    console.log(arrList);
    listaSpesa.innerHTML += `<li> ${arrList[i]}</li>`;
    i++;
}
while (i < arrList.length) {

    // console.log('con while');
    listaSpesa.innerHTML += `<li> ${arrList[i]}</li>`;
    i++;
}
  

