export default reverse = (str)=>{
    const reverse = []
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        reverse.unshift(element)
    }
    return reverse.join("")
}