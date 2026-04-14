function encodeText() {
    const text = document.getElementById('textInput').value;
    const encodingType = document.getElementById('encodingType').value;
    const outputElement = document.getElementById('outputText');
    
    if (!text) {
        outputElement.value = 'Please enter some text to encode.';
        return;
    }
    
    let result = '';
    
    switch (encodingType) {
        case 'binary':
            result = textToBinary(text);
            break;
        case 'octal':
            result = textToOctal(text);
            break;
        case 'decimal':
            result = textToDecimal(text);
            break;
        case 'hex':
            result = textToHex(text);
            break;
        default:
            result = 'Unknown encoding type';
    }
    
    outputElement.value = result;
}

function textToBinary(text) {
    return text.split('').map(char => {
        return char.charCodeAt(0).toString(2).padStart(8, '0');
    }).join(' ');
}

function textToOctal(text) {
    return text.split('').map(char => {
        return char.charCodeAt(0).toString(8);
    }).join(' ');
}

function textToDecimal(text) {
    return text.split('').map(char => {
        return char.charCodeAt(0);
    }).join(' ');
}

function textToHex(text) {
    return text.split('').map(char => {
        return char.charCodeAt(0).toString(16).padStart(2, '0');
    }).join(' ');
}
