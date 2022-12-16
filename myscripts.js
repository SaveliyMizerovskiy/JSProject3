function init(){
    diceTable = document.getElementById("dicetable");
}

function submit(){
    numDie = document.getElementById("numDie").value;
    numRolls = document.getElementById("numRolls").value;
    console.log(numDie + " " + numRolls);
}

function rollDice(){
    console.log(numDie + " " + numRolls);
    var doubles = 0;
    var triples = 0;
    var total;
    var currentRoll1;
    var currentRoll2;
    var currentRoll3;
    var median;
    for (var i = 0; i < numRolls; i++){

        if (numDie == 1){
            currentRoll1 = getRandomInteger(1, 6);
            total = currentRoll1;
            median = currentRoll1;
        } else if (numDie == 2){
            currentRoll1 = getRandomInteger(1, 6);
            currentRoll2 = getRandomInteger(1, 6);
            total = currentRoll1 + currentRoll2;
            median = total / 2;
            if (currentRoll1 == currentRoll2){
                doubles ++;
            }
        } else {
            currentRoll1 = getRandomInteger(1, 6);
            currentRoll2 = getRandomInteger(1, 6);
            currentRoll3 = getRandomInteger(1, 6);
            total = currentRoll1 + currentRoll2 + currentRoll3;
            if (currentRoll1 == currentRoll2 || currentRoll1 == currentRoll3 || currentRoll2 == currentRoll3){
                doubles++;
            }
            if (currentRoll1 == currentRoll2 && currentRoll2 == currentRoll3){
                triples ++;
            }
            median = currentRoll2;
        }

        var newRow = diceTable.insertRow();

        var newCell = newRow.insertCell();
        newCell.innerHTML = total;

        newCell = newRow.insertCell();
        newCell.innerHTML = total / numDie;

        newCell = newRow.insertCell();
        newCell.innerHTML = median;

        newCell = newRow.insertCell();
        newCell.innerHTML = currentRoll1;

        newCell = newRow.insertCell();
        newCell.innerHTML = doubles;

        newCell = newRow.insertCell();
        newCell.innerHTML = triples;
    }
    

}

function getRandomInteger(lower, upper) {
    var multiplier = upper - (lower - 1);
    var rnd = parseInt(Math.random() * multiplier) + lower;
    console.log(rnd);
    return rnd;
}