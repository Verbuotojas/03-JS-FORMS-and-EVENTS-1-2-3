//pirmas 

function getRandomInt(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + min)) + min;
}

let form1 = document.forms[0];

let timesGuessed = 0;
let gessDesription = document.getElementById("resultText");
let randomNumber = getRandomInt(0, 10);
console.log(randomNumber);

form1.addEventListener("submit", function (e) {

    e.preventDefault();


    timesGuessed++;
    let guessedNumber = +e.target.elements.numberGussed.value;
    if (guessedNumber === randomNumber) {
        alert("teisingai");
    } else if (guessedNumber < randomNumber) {
        document.getElementById("resultText").textContent = "skaicius yra didesnis";

    } else {
        document.getElementById("resultText").textContent = "skaicius yra mazesnis";

    }
    document.getElementById("resultCount").textContent = timesGuessed + " kartu speta";
});

//antras

let form2 = document.querySelector("#form2");

form2.addEventListener("submit", function (e) {
    e.preventDefault();
    let numb1 = +e.target.elements.firstNumber.value;
    let numb2 = +e.target.elements.secondNumber.value;


    document.getElementById("sum").textContent = numb1 + numb2;

    console.log(numb1);
    console.log(numb2);

})


//trecias

let form3 = document.querySelector("#form3");


form3.addEventListener('submit', function (e) {
    e.preventDefault();

    let height = +e.target.elements.height.value;
    let weight = +e.target.elements.weight.value;


    console.log(weight);
    console.log(height);

    document.getElementById("kmi").textContent = "kmi yra:" + (weight / (height * height)) * 10000;



})
