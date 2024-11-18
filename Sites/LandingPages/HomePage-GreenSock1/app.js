const titre = document.querySelector('h1');
const txt = document.querySelector('p');
const btn = document.querySelector('button');
const imgLaptop = document.querySelector('.laptop');
const allItems = document.querySelectorAll('li');

const TL1 = new TimelineMax({paused: true});

TL1 
.from(titre, 1, {y: -100, opacity: 0})
.from(txt, 1, {opacity: 0}, '-=0.4')
.from(btn, 1, {opacity: 0}, '-=0.5')
.from(imgLaptop, 1, {x: 100, opacity: 0}, '-=0.5')
.staggerFrom(allItems, 1, {y: -50, opacity: 0}, 0.2, '-=1')


TL1.play();

function testPremier (nbr)
{
    for(let i = 2; i < nbr; i++) 
    {
        if (nbr%i === 0)
        { 
            return false;
        }
    }    
    return true;
}

let testPremierFctFleche = function (nbr)
{
    for(let i = 2; i < nbr; i++) 
    {
        if (nbr%i === 0)
        { 
            return false;
        }
    }    
    return true;
}

let t1 = new Date;
let t1ms = t1.getTime();

console.log( t1 );
console.log( t1ms );
console.log( t1.getDay());
console.log( t1.getUTCFullYear());

let ii=0; 
let nbrDePremier = 0;
let test=false;
for (ii=0;ii<10000;ii++)
{
    test = testPremier(ii);
    test = testPremierFctFleche(ii);
    if ( test === true) 
    {
        nbrDePremier++;
    }
}

let t2 = new Date;
let t2ms = t2.getTime();
console.log( t2 );
console.log( t2ms );

console.log(`Nombre de 1er : ${nbrDePremier} `)
console.log(`Différence avec une simple fonction : ${t2ms - t1ms} milliseconds`)

let nbrElt = 1000000;
let tableau = [];
for (ii=0;ii<nbrElt;ii++)
{
    tableau.push(ii);
}
console.log(tableau);

t1 = new Date;
t1ms = t1.getTime();

for (ii=0;ii<nbrElt;ii++)
{
    tableau[ii] = tableau[ii]+1;
}
console.log(tableau);

t2 = new Date;
t2ms = t2.getTime();
console.log(`Différence avec une boucle for : ${t2ms - t1ms} milliseconds`)

t1 = new Date;
t1ms = t1.getTime();

tableau.forEach ((elt)=>{elt+1});
console.log(tableau);

t2 = new Date;
t2ms = t2.getTime();
console.log(`Différence avec forEach : ${t2ms - t1ms} milliseconds`)

