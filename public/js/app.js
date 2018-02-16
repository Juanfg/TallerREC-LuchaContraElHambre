var currentQuestion;
var questionBucket = ['¿Cuánto gastas a la semana en comida (despensa, restaurantes, comida rápida, botana, etc) ?', '¿Cuánto te gastas cuando vas al cine?', '¿Cuánto gastas cuando vas al antro / bar?', '¿Cuánto te gastas en gasolina al mes?', '¿Cuánto te gastas en consumo de datos móviles al mes?', '¿Cuánto te gastas cuando vas a un concierto?', '¿Cuánto te gastas en promedio cuando te vas de viaje?', '¿Cuánto te gastas en ropa cuando sales de compras?'];
var questionCounter;
var maximumQuestion;
var moneyCounter = 0;

function init() {
    moneyCounter = 0;
    questionCounter = 0;
    maximumQuestion = 3;
    questionBucket = shuffle(questionBucket);
    currentQuestion = questionBucket[0];
    $('#question').html(currentQuestion);
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function next() {
    moneyCounter += parseFloat(document.getElementById('answer').value);

    if (questionCounter == maximumQuestion - 1) {
        // We are in the last question
        $('#next').hide();
        $('#answer').hide();
        $('#question').hide();
        $('#submit').show();
    } else {
        // We have still some questions
        currentQuestion = questionBucket[++questionCounter];
        $('#question').html(currentQuestion);
    }
    $('#answer').val('$0.00');
}

function submit() {

}