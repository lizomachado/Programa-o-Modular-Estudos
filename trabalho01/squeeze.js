function squeeze(palavra) {

    if (typeof palavra !== "string") 
        return undefined

    if (palavra.length === 0) 
        return ""

    var novaPalavra = ""

    for (var i = 0; i < palavra.length; i++) {

        if (i === 0) {
            novaPalavra = novaPalavra + palavra[i]
        } else {

            if (palavra[i] !== palavra[i - 1]) {
                novaPalavra = novaPalavra + palavra[i]
            }
        }
    }

    return novaPalavra;
}

module.exports = squeeze; 

