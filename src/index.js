main();

function main() {
    var inputString = 'A == BB';
    inputString = inputString.split(' == ');
    var leftSide = parseLeftSide(inputString[0]);
    var rightSide = inputString[1];

    //need to have a function that comes back with non leading zeros so that I can factor this in in the iterator
    var nonLeadingZeros;

    if (inequality(leftSide, rightSide)) {
        return null;
    }

    if (checkForLeadingZero(rightSide, leftSide)) {
        return null;
    }

    createPotentialSolutions(inputString, leftSide, rightSide);
}

function createPotentialSolutions(inputString) {
    var uniqueVariables = getUniqueVariables(inputString);
    var variableArrays = [];
    var zeroThroughNine = Array.apply(null, {length: 10}).map(Number.call, Number);
    uniqueVariables.forEach(function(){
        variableArrays.push(zeroThroughNine);
    });
    var possibleAnswers = [];
    variableArrays.forEach(function(variableArray, index){
       var test = [];
       variableArray.forEach(function(variable){
           test.push(variable);
       })
        console.log(test);
    });
    variableArrays[0].forEach(function(a1) {
        variableArrays[1].forEach(function(a2) {
            if(a1 !== a2) {
                possibleAnswers.push([a1, a2])
            }
        });
    });
    //console.log(possibleAnswers);
}

function getUniqueVariables(inputString) {
    inputString[0] = inputString[0].split(' + ');
    var uniqueVariables = inputString.join('').replace(',', '').split('');
    var filteredArray = uniqueVariables.filter(function(item, pos){
        return uniqueVariables.indexOf(item)== pos;
    });
    return filteredArray;
}

function inequality(leftSide, rightSide) {
    if (leftSide.length == 1 && rightSide.length == 1 && leftSide !== rightSide) {
        return true;
    }
}

function checkForLeadingZero(rightSide, leftSide) {
    var returnValue;
    leftSide.forEach(function(object) {
        if (object.length > rightSide.length) {
            returnValue = true;
        }
    });
    return returnValue;
}

function parseLeftSide(leftSide) {
    return leftSide.split(' + ');
}