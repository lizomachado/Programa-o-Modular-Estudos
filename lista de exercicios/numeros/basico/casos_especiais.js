function soma_especial(a, b) {

    if (b === undefined) {
        if (typeof a !== "number") {
            return NaN;
        }
        return a;
    }

    if (typeof a !== "number" || typeof b !== "number") {
        return NaN;
    }

    return a + b;
}


console.log(soma_especial(2, "3")); // NaN
console.log(soma_especial("2")); // NaN
console.log(soma_especial(3)); // 3