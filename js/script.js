const listaSpesa = ['ciliegie', 'patatine', 'birra', 'acqua', 'cocacola', 'cioccolati', 'pasta', 'sugo'];
let i = 0;


const ulElements = document.querySelector('ul#lista_dom');

while(i < listaSpesa.length){
    let liElements = document.createElement('li');
    liElements.classList.add('My_li');
    liElements.append(listaSpesa[i]);
    ulElements.appendChild(liElements);
    i++
}
