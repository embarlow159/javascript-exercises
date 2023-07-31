const palindromes = function (word) {
    let processWord = word.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    let splitString = processWord.split('');
    let reverseString = splitString.reverse();
    let joinString = reverseString.join('');
    if (processWord===joinString) {
        return true
    }
    else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
