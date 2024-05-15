const listaSpesa = ['ciliegie', 'patatine', 'birra', 'acqua', 'cocacola', 'cioccolati', 'pasta', 'sugo'];
let i = 0;


const ulElements = document.querySelector('ol#lista_dom');

while(i < listaSpesa.length){
    let liElements = document.createElement('li');
    liElements.classList.add('My_li');
    liElements.append(listaSpesa[i]);
    ulElements.appendChild(liElements);
    i++
}


const bottone = document.querySelector('button#My_button');
let nuovoElemento;
bottone.addEventListener('click', function(event){
    event.preventDefault();
    nuovoElemento = document.querySelector('input#nuovo_elemento');
    if(nuovoElemento.value.length != 0){
        let liElements = document.createElement('li');
        liElements.classList.add('My_li');
        liElements.append(nuovoElemento.value);
        ulElements.appendChild(liElements);
        document.getElementById('form').reset();
    }
})

