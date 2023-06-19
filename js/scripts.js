const listaSpesa = [
    'qualcosa di buono per Alessio',
    'uova',
    'pane',
    'latte'
];

const ul = document.getElementById('ul');

for (let index = 0; index < listaSpesa.length; index++) {
    console.log(index, listaSpesa[index]);

    // const newLi = document.createElement('li');
    // newLi.innerHTML = listaSpesa[index];
    // ul.append(newLi);

    // OPPURE

    ul.innerHTML += `
        <li>
            ${listaSpesa[index]}
        </li>
    `;
}

