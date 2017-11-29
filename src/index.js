main();

function main() {
    var inputString = 'A == B';
    inputString = inputString.split(' == ');
    var leftSide = parseLeftSide(inputString[0]);
    var rightSide = inputString[1];
    if (inequality(leftSide, rightSide)) {
        return null;
    }
    var totalMax = findMaxTotal(rightSide);
    var totalMin = findMinTotal(rightSide);
}

function inequality(leftSide, rightSide) {
    if (leftSide.length === rightSide.length && leftSide !== rightSide) {
        return true;
    }
}
function checkForBiggerRightSide() {

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