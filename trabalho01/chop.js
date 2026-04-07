function chop (palavra) {

    if (typeof palavra !== "string") 
        return undefined

    if (palavra.length === 0) 
        return undefined

    var novapalavra = ""

    for (i = 0; i < palavra.length - 1; i++) {
        novapalavra = novapalavra + palavra[i]
    }
    return novapalavra

    }

    module.exports = chop;

