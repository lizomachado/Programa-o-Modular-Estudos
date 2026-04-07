function chomp(palavra) {

    if (typeof palavra !== "string") return undefined;

    var n = "\n";
    var r = "\r";
    var i;

    for (i = palavra.length - 1; i >= 0; i--) {
        if (palavra[i] !== n && palavra[i] !== r) {
            break;
        }
    }
    
    if (i < 0) return "";

    var novaPalavra = "";

    for (var j = 0; j <= i; j++) {
        novaPalavra = novaPalavra + palavra[j];
    }
    return novaPalavra;
}

module.exports = chomp;