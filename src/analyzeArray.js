const analyzeArray = (arr) => {
    const lg = arr.length
    const av = average(arr, lg)
    const min = minimo(arr)
    const max = maximo(arr)

    return {
        average: av,
        min: min,
        max: max,
        length: lg
    }
}

const average = (arr , length) => {
    let sum = arr.reduce((acumulador,element)=>{
        return acumulador + element
    },0)
    return sum/length
    
}

const minimo = (arr) => {
    return arr.reduce((acum , item)=> {
        if(acum <= item) {
            return acum
        } else {return item}
    })
}

const maximo = (arr) => {
    return arr.reduce((acum , item)=> {
        if(acum >= item) {
            return acum
        } else {return item}
    })
}

export default analyzeArray

