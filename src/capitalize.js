export default function capitalize(word){
    if(word==="")return "ERROR"
    let firstLetter = word.at(0).toUpperCase()
    let rest = word.slice(1)
    return firstLetter + rest
}
