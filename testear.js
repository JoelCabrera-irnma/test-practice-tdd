const abcEspañol = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

function caesarCipher(word, shift) {
    const i = find(word, shift)
    return i.join("")
}


const find = (str,shi)=> {
    let wordShift = []
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        const index = returnIndex(element)
        if(index === -1){
            wordShift.push(element)
        } else {
            const valueShift = returnValue(index,shi)
            wordShift.push(valueShift)
        }
    }
    return wordShift
}

const returnIndex = (e)=> {
    const indice = abcEspañol.indexOf(e);
    return indice
}

const returnValue = (i, s)=> {
    const indexShift = i + s ;
    let valueShift;
    if(indexShift > abcEspañol.length-1){
        const dif = indexShift - (abcEspañol.length-1)
        valueShift = abcEspañol[dif-1]
    } else {
        valueShift = abcEspañol[indexShift]
    }
    return valueShift
}

console.log(caesarCipher("p.alo", 2))