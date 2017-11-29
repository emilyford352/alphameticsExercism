main();

function main() {
    var inputString = 'AS + A == MOM';
    inputString = inputString.split(' == ');
    var leftSide = parseLeftSide(inputString[0]);
    var rightSide = inputString[1];

    if (inequality(leftSide, rightSide)) {
        return null;
    }

    if (checkForLeadingZero(rightSide, leftSide)) {
        return null;
    }

    iterator(inputString, leftSide, rightSide);
}

function iterator(inputString, leftSide, rightSide) {
    //var totalMax = findMaxTotal(rightSide);
    //var totalMin = findMinTotal(rightSide);
    var uniqueVariables = getUniqueVariables(inputString);
    //var possibleValues =
    console.log(uniqueVariables);
}

function getUniqueVariables(inputString) {
    inputString[0] = inputString[0].split(' + ');
    var uniqueVariables = inputString.join('').replace(',', '').split('');
    var filteredArray = uniqueVariables.filter(function(item, pos){
        return uniqueVariables.indexOf(item)== pos;
    });
    return filteredArray;
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function inequality(leftSide, rightSide) {
    if (leftSide.length == 1 && leftSide !== rightSide) {
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

function findMaxTotal(rightSide) {
    var rightSideLength = rightSide.length;
    return parseInt(Array(rightSideLength + 1).join(9));
}

function findMinTotal(rightSide) {
    var rightSideLength = rightSide.length;
    var min = Array(rightSideLength).join(0);
    return parseInt('1' + min);
}