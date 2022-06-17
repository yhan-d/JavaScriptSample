// function topla(){
//     var result = getParam("s1") + getParam("s2");
//     print(result);

// }

// function cikar(){
//     var result = getParam("s1") - getParam("s2");
//     print(result);

// }

// function carp(){
//     var result = getParam("s1") * getParam("s2");
//     print(result);

// }

// function bol(){
//     var result = getParam("s1") / getParam("s2");
//     print(result);
// }

// function getParam(id){
//     return parseInt(document.getElementById(id).value);
// }

// function print(sonuc){
//     document.getElementById("sonuc").innerHTML = sonuc
// }

////// ES7 Standartları /////
const topla = () => {
    var sonuc = getParam("s1") + getParam("s2")
    yazdir(sonuc)
}

const cikar = () => {
    var sonuc = getParam("s1") - getParam("s2")
    yazdir(sonuc)
}

const carp = () => {
    var sonuc = getParam("s1") * getParam("s2")
    yazdir(sonuc)
}

const bol = () => {
    var sonuc = getParam("s1") / getParam("s2")
    yazdir(sonuc)
}

const getParam = (id) => {
    return parseInt(document.getElementById(id).value)
}


const yazdir = (sonuc) => {
    document.getElementById("sonuc").innerHTML = sonuc;
}


