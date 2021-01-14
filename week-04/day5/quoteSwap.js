const words =
    ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];


function quoteSwap(words) {

    words.splice(2, 0, "cannot");
    words.splice(3, 1);
    words.splice(5, 1)
    words.splice(5, 0, "do")


}

console.log('What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.');
//console.log(quoteSwap(words));