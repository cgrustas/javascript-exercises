const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const lowerCaseStr = str.toLowerCase();
    let alphanumericStr = '';
    for (i = 0; i < lowerCaseStr.length; i++) {
        if (alphanumerical.includes(lowerCaseStr.charAt(i))) {
            alphanumericStr += lowerCaseStr.charAt(i);
        }
    }
    const reversedStr = alphanumericStr.split('').reverse().join('');
    return alphanumericStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
