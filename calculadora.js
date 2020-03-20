const sumar = (...operandos) => {
    return operandos.reduce((res, elem) => {
        return Number(res) + Number(elem);
    })
};
const restar = (...operandos) => {
    return operandos.reduce((res, elem) => {
        return Number(res) - Number(elem);
    })
};
const multiplicar = (...operandos) => {
    return operandos.reduce((res, elem) => {
        return Number(res) * Number(elem);
    })
};
const dividir = (...operandos) => {
    return operandos.reduce((res, elem) => {
        return Number(res) / Number(elem);
    })
};
const factorial = (factorial) => {
    let resultado = 1;
    for(let i = 1; i <= factorial; i++){
        resultado = resultado * i;
    }
    return resultado;
};

module.exports = {
    "sumar": sumar,
    "restar": restar,
    "multiplicar": multiplicar,
    "dividir": dividir,
    "factorial": factorial
}