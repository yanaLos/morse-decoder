const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var string = expr;
    var letter = '';
    var i = 0;
    var arrayLetters = [];
    var decodeExpr = '' ;
    var decodeLetter = '';

        while(i <= string.length){
            letter = letter + string[i];
                i++;
                if ( letter !== '' && i % 10 == 0 ) {
                    arrayLetters.push(letter);
                    letter = '';
                }
        }      
    i = 0;

    while(i < arrayLetters.length){
        decodeLetter = arrayLetters[i];
        decodeLetter = decodeLetter.split('10').join('.');
        decodeLetter = decodeLetter.split('11').join('-');
        decodeLetter = decodeLetter.split('0').join('');
        decodeLetter = decodeLetter.split('**********').join(' ');
        if (decodeLetter!==' ') decodeExpr = decodeExpr + MORSE_TABLE[decodeLetter];
        else decodeExpr = decodeExpr + decodeLetter;
            i++;
    }
    return decodeExpr
}

module.exports = {
    decode
}
