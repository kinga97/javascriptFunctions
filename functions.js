'use strict';

/* Ez a függyvény deklarációs módszer. */

/* function Osszead(a, b) {
    return a + b;
}

let eremeny = Osszead(123, 25);

document.getElementById('kiir').innerText = eremeny;

console.log(eremeny);
console.log(Osszead(-96, 485)); */

/* function Osszead() {
    let elso = window.prompt('Kérem az első számot: ', 10);
    let masodik = window.prompt('Kérem a második számot: ', 20);
    // console.log(`Az eredmény: ${+elso + +masodik}`);
    console.log(`Az eredmény: ${Number(elso) + Number(masodik)}`);
}

Osszead(); */

/* EhesVagy();

function EhesVagy() {
    let valasz = window.confirm('Éhes vagy-e?');
    if (valasz) {
        console.log('Akkor menj el kajálni!');
    } else {
        console.log('Egészségedre!');
    }
}

EhesVagy(); */

/* Ez a függvény literál módszer. */

/* console.log(Osszead(123, 586));

let Osszead = function(a, b) {
    return a + b;
};

console.log(Osszead(123, 586)); */

/* let EhesVagy = function() {
    if(window.confirm('Éhes vagy-e?')) {
        console.log('Menj el kajálni!');
    } else {
        console.log('Egészségedre!');
    }
};

EhesVagy(); */

/* function TudszSzamolni(question, igen, nem) {
    if (window.confirm(question)) {
        igen();
    } else {
        nem();
    }
}

TudszSzamolni('Tudsz-e számolni!',
    // Ez egy anonim callback függvény.
    function() { 
        let elso = window.prompt('Az első szám: ', 0);
        let masodik = window.prompt('A műásodik szám: ', 0);
        console.log(`Az eredmény: ${+elso + +masodik}`);
    },
    // Ez egy anonim callback függvény.
    function() {
        console.log('Menj vissza az iskolába!');
    }
); */

/* Arrow function (nyíl függvény) */

/* Függvény literál

let Osszead = function(a, b) {
    return a + b;
}; */

// Arrow function

let Osszead = (a, b) => a + b;

console.log(Osszead(14, 28));

/* Megjegyzések */

/* Ha nincs paraméter, akkor
let ValamilyenFuggveny = () => ;
Ha egy paraméter van:
let ValamilyenFuggveny = (a) => ;
let ValamilyenFuggveny = a => ;

Többsoros utasítás esetén be kell szúrni a return:
let ValamilyenFuggveny = () => {
    ....
    return ..;
};
*/