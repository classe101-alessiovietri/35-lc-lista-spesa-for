const listaSpesa = [
    'qualcosa di buono per Alessio',
    'uova',
    'pane',
    'latte'
];

const ul = document.getElementById('ul');

// for (let index = 0; index < listaSpesa.length; index++) {
//     console.log(index, listaSpesa[index]);

//     // const newLi = document.createElement('li');
//     // newLi.innerHTML = listaSpesa[index];
//     // ul.append(newLi);

//     // OPPURE

//     ul.innerHTML += `
//         <li class="color">
//             ${listaSpesa[index]}
//         </li>
//     `;
// }

// Voglio che si evidenzi SOLO L'ULTIMO li cliccato
/* 

    Team Fra Solution:
    1) ciclo su tutti i li
    2) rimuovo la classe color da ogni li
    3) aggiungo la classe color sull'appena cliccato li

    Nunz's Solution:
    1-x) uso una variabile d'appoggio che mi ricorda chi ho cliccato per ultimo

    Ale:
    1) aggiorno la variabile che mi dice chi ho cliccato per ultimo
    2) 

    Stefan's Solution:
    1) tolgo la classe di base dall'elemento cliccato e aggiungo quella per colorare
    2) PROCESSING...

    Enrico:
    1) toggle della classe active sull'elemento cliccato
    2) PROCESSING...

    Stefano: => OK
    1) rimuovo la classe color da chi ce l'ha (seleziono in qualche modo)
    2) aggiungo la classe color al selezionato

*/

let lastClickedIndex = null;

// Qui inserisco una variabile che mi servirà da contatore
let index = 0;
while (index < listaSpesa.length) {
    console.log('WHILE', index, listaSpesa[index]);

    const currentIndex = index;

    const newLi = document.createElement('li');
    newLi.innerHTML = listaSpesa[index];
    newLi.addEventListener('click',









        function () {
            console.log('Precedentemente cliccato:', lastClickedIndex);
            console.log('Ora cliccato su:', currentIndex);

            const allLi = document.querySelectorAll('ul#ul > li');

            if (lastClickedIndex != null) {
                console.log('allLi', allLi, typeof allLi);
                console.log('allLi[lastClickedIndex]', allLi[lastClickedIndex], typeof allLi[lastClickedIndex]);
                allLi[lastClickedIndex].classList.remove('color');
            }

            // Aggiorno il valore di lastClickedIndex con l'indice dell'elemento appena cliccato
            lastClickedIndex = currentIndex;

            allLi[currentIndex].classList.add('color');
        }
















    );

    ul.append(newLi);

    index++;
}