module.exports = function toReadable (number) {
    let primitives = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    let ties = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
    let hundred = ['hundred '];

    let numberTens = number / 10;
    let numberHundreds = number / 100;

    if (number < 20 && number > 0) {
        return String(primitives[number]).trim();
    } else if (number >=20 && number < 100) {

        if (number % 10 === 0) {
            return String(ties[numberTens]).trim();
        } else {
            return String(ties[Math.floor(number / 10)] + primitives[number % 10]).trim();
        }

    } else if (number >= 100 && number < 1000) {
        
        if (number % 100 === 0) {
            return String(primitives[numberHundreds] + hundred[0]).trim();
        } else if (number % 100 < 20) {
            return String(primitives[Math.floor(number / 100)] + hundred[0] + primitives[number % 100]).trim();
        } else if ((number % 100) % 10 === 0) {
            return String(primitives[Math.floor(number / 100)] + hundred[0] + ties[(number % 100) / 10]).trim();
        } else if (number % 100 >= 20 && number % 100 < 100 && (number % 100) % 10 !== 0) {
            return String(primitives[Math.floor(number / 100)] + hundred[0] + ties[Math.floor((number % 100) / 10)] + primitives[((number % 100) % 10)]).trim();
        }
    } else {
        return 'zero';
    }
};
