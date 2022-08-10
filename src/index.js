module.exports = function toReadable (number) {
    const unit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const ten = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const digit = number%10;
    const integers = Math.floor(number/10);

    if (number < 20) {
        return unit[number];
    }

    if (number < 100) {
        
        return ten[integers] + (digit == 0 ? '' : ' ' + unit[digit]);
    }         

    if (number < 1000) {
        return unit[Math.floor(number/100)] + ' hundred' + (number%100 == 0 ? '' : ' ' + toReadable(number%100)); //+ (digit === 0 ? '' : ' ' + unit[digit]);
    }

    


}



