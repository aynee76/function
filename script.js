
function reverse(num) {
    let reverseNum = num.toString();
    let str = reverseNum.split("");
    let strReverse = str.reverse();
    let pushStr = strReverse.join("");
    let numJoin = parseInt(pushStr);
    return numJoin;
}

console.log(reverse(768))