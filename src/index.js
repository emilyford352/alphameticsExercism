'use strict';
main();

function main() {
    var inputString = 'A == BB';
    inputString = inputString.split(' == ');
    var leftSide = parseLeftSide(inputString[0]);
    var rightSide = inputString[1];

    if (inequality(leftSide, rightSide)) {
        return null;
    }

    if (checkForLeadingZero(rightSide, leftSide)) {
        return null;
    }

    var possibleSolutions = createPotentialSolutions(inputString, leftSide, rightSide);

    var solution = calculateSolution(inputString, leftSide, rightSide, possibleSolutions);

    console.log(solution);
}

function calculateSolution(inputString, leftSide, rightSide, possibleSolutions) {
    var solutionObject = {};
    var uniqueVariables = getUniqueVariables(inputString);
    console.log(uniqueVariables);
    possibleSolutions.forEach(function(possibleSolution) {
        possibleSolution.forEach(function(solution, index) {
           solutionObject[uniqueVariables[index]] = possibleSolution[index];
        });


        //var leftSideSolution = leftSide.reduce(function(a, b) { return a + b; }, 0);

        //if (leftSideSolution === rightSide) {
        //    solutionObject = possibleSolution;
        //    return;
        //}
    });
}

function createPotentialSolutions(inputString) {
    var uniqueVariables = getUniqueVariables(inputString);
    var variableArrays = [];
    var zeroThroughNine = Array.apply(null, {length: 10}).map(Number.call, Number);
    uniqueVariables.forEach(function(variable, index){
        variableArrays.push(zeroThroughNine);
    });
    return calculatePermutations(variableArrays);
}

function calculatePermutations(arrays) {
    var r = [], max = arrays.length-1;

    function helper(arr, i) {
        for (var j=0, l=arrays[i].length; j<l; j++) {
            var a = arr.slice(0); // clone arr
            a.push(arrays[i][j]);
            if (i==max)
                r.push(a);
            else
                helper(a, i+1);
        }
    }
    helper([], 0);
    return r;
}

function getUniqueVariables(inputString) {
    //inputString[0] = inputString[0].split(' + ');
    var uniqueVariables = inputString.join('').replace(',', '').split('');
    var filteredArray = uniqueVariables.filter(function(item, pos){
        return uniqueVariables.indexOf(item)== pos;
    });
    return filteredArray;
}

function inequality(leftSide, rightSide) {
    if (leftSide.length == 1 && rightSide.length == 1 && leftSide[0] !== rightSide) {
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