const buttonEmbaralhar = document.getElementById("buttonEmbaralhar");

const obj1 = document.getElementById("obj1");
const obj2 = document.getElementById("obj2");
const obj3 = document.getElementById("obj3");
const obj4 = document.getElementById("obj4");
const obj5 = document.getElementById("obj5");
const obj6 = document.getElementById("obj6");
const obj7 = document.getElementById("obj7");
const obj8 = document.getElementById("obj8");
const obj9 = document.getElementById("obj9");
const obj10 = document.getElementById("obj10");
const obj11 = document.getElementById("obj11");
const obj12 = document.getElementById("obj12");
const obj13 = document.getElementById("obj13");
const obj14 = document.getElementById("obj14");
const obj15 = document.getElementById("obj15");
const obj16 = document.getElementById("obj16");

const card1 = document.getElementById("card-1");
const card2 = document.getElementById("card-2");
const card3 = document.getElementById("card-3");
const card4 = document.getElementById("card-4");
const card5 = document.getElementById("card-5");
const card6 = document.getElementById("card-6");
const card7 = document.getElementById("card-7");
const card8 = document.getElementById("card-8");
const card9 = document.getElementById("card-9");
const card10 = document.getElementById("card-10");
const card11 = document.getElementById("card-11");
const card12 = document.getElementById("card-12");
const card13 = document.getElementById("card-13");
const card14 = document.getElementById("card-14");
const card15 = document.getElementById("card-15");
const card16 = document.getElementById("card-16");

const cardes = document.querySelectorAll(".card")


const card = {
    card1: {
        prenchido: true
    },
    card2: {
        prenchido: true
    },
    card3: {
        prenchido: true
    },
    card4: {
        prenchido: true
    },
    card5: {
        prenchido: true
    },
    card6: {
        prenchido: true
    },
    card7: {
        prenchido: true
    },
    card8: {
        prenchido: true
    },
    card9: {
        prenchido: true
    },
    card10: {
        prenchido: true
    },
    card11: {
        prenchido: true
    },
    card12: {
        prenchido: true
    },
    card13: {
        prenchido: true
    },
    card14: {
        prenchido: true
    },
    card15: {
        prenchido: true
    },
    card16: {
        prenchido: true
    }
}

const obj = {
    obj1: {
        numero: 1
    },
    obj12: {
        numero: 1
    },
    obj3: {
        numero: 2
    },
    obj4: {
        numero: 2
    },
    obj5: {
        numero: 3
    },
    obj6: {
        numero: 3
    },
    obj7: {
        numero: 4
    },
    obj8: {
        numero: 4
    },
    obj9: {
        numero: 5
    },
    obj10: {
        numero: 5
    },
    obj11: {
        numero: 6
    },
    obj12: {
        numero: 6
    },
    obj13: {
        numero: 7
    },
    obj14: {
        numero: 7
    },
    obj15: {
        numero: 8
    },
    obj16: {
        numero: 8
    }
}

function Embaralhar() {

    const max = 2;
    const number = Math.floor(Math.random() * (max + 1));


    const card1 = document.getElementById(`card-${number}`)
    const card2 = document.getElementById(`card-${number}`)

    card1.appendChild(obj2)
    card2.appendChild(obj1)

}

function VirarCarta(){
    obj1.style.visibility = "visible"
}

buttonEmbaralhar.addEventListener("click", Embaralhar)

card1.addEventListener("click", VirarCarta)
card2.addEventListener("click", VirarCarta)
card3.addEventListener("click", VirarCarta)
card4.addEventListener("click", VirarCarta)
card5.addEventListener("click", VirarCarta)
card6.addEventListener("click", VirarCarta)
card7.addEventListener("click", VirarCarta)
card8.addEventListener("click", VirarCarta)
card9.addEventListener("click", VirarCarta)
card10.addEventListener("click", VirarCarta)
card11.addEventListener("click", VirarCarta)
card12.addEventListener("click", VirarCarta)
card13.addEventListener("click", VirarCarta)
card14.addEventListener("click", VirarCarta)
card15.addEventListener("click", VirarCarta)
card16.addEventListener("click", VirarCarta)