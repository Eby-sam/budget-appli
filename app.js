// depenses
let reset1 = document.getElementById('reset1');
let add1 = document.getElementById('add1');
let rente1 = document.getElementById('rente');
function addit() {
    let depFixe = document.getElementById('depF').value;
    let loyer = document.getElementById('loyer').value;
    let credit = document.getElementById('credit').value;
    let eau = document.getElementById('eauEG').value;
    let internet = document.getElementById('internet').value;
    let assur = document.getElementById('assurance').value;
    let assurV = document.getElementById('assuV').value;
    let mutuel = document.getElementById('mutuel').value;
    let fraisG = document.getElementById('fraisG').value;
    let impotR = document.getElementById('impotR').value;
    let impotL = document.getElementById('impotL').value;
    let depC = document.getElementById('depC').value;
    let course = document.getElementById('course').value;
    let essence = document.getElementById('essenc').value;
    let activit = document.getElementById('activiteS').value;
    let occasionel = document.getElementById('occasion').value;
    let sortie = document.getElementById('sortie').value;
    let autre1 = document.getElementById('autre1').value;

    result = (parseFloat(loyer) + parseFloat(depFixe) + parseFloat(credit) + parseFloat(eau) + parseFloat(internet) +
    parseFloat(assur) + parseFloat(assurV) + parseFloat(mutuel) + parseFloat(fraisG) + parseFloat(impotR) + parseFloat(impotL) +
    parseFloat(depC) + parseFloat(course) + parseFloat(essence) + parseFloat(activit) + parseFloat(occasionel) + parseFloat(sortie)+
    parseFloat(autre1));
    if(isNaN(result)) {

    }
    rente1.innerHTML = result;
    console.log(result);
}
let result = 0;

add1.addEventListener('click',addit);

//recette
let res2 = document.getElementById('res2');
let add2 = document.getElementById('add2');
function addit2 () {
    let salaire = document.getElementById('salaire').value;
    let rente2 = document.getElementById('rente2').value;
    let aide = document.getElementById('aide').value;
    let autre2 = document.getElementById('autre2').value;

    result2 = (parseFloat(salaire) + parseFloat(rente2) + parseFloat(aide) + parseFloat(autre2));
    res2.innerHTML = result2;
}
let result2 = 0;

add2.addEventListener('click', addit2);


let but3 = document.getElementById('but3');
let res3 = document.getElementById('rest3');

function epargne () {
    let epargn = document.getElementById('epargn').value;
    result3 = parseFloat(epargn) ;
    res3.innerHTML = result3;
}
let result3 = 0;
but3.addEventListener('click', epargne);


//resultat des depenses ...
let calcTotal = 0;
let rest = document.getElementById('rest');
let calc = document.getElementById('calcul');
function total () {
    let message = document.getElementById('message');
    calcTotal = result2 - result - result3;
    rest.innerHTML = calcTotal;
    if(calcTotal === 0) {
        message.innerHTML = "pile poile , essayez d'économisé";
    }

    else if(calcTotal < 0) {
        message.innerHTML = "Oula , il y a une couille dans l'patée";
    }

    else if(calcTotal > 0) {
        message.innerHTML = "nickel vous avez encore du floodz";
    }
}

calc.addEventListener('click' , total);