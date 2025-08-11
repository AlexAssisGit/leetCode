const MOD = 1_000_000_007;

var productQueries = function(n, queries) {
    
    let powers = [];
    let restante = n;
    let potencia = 0;

    while(restante > 0)
    {
        if((restante & 1) === 1) {
            powers.push(2 ** potencia);
        }
        restante = restante >> 1;
        potencia++;
    }

    function calcularResposta(queries, powers){
        return queries.map(([a, b], indice) => {
            if (a === b){
                return powers[a] % MOD; 
            } else {
                const intervalo = powers.slice(a, b + 1);
                return intervalo.reduce((produto, val) => (produto * val) % MOD, 1);
            }
        });
    }

    return calcularResposta(queries, powers);
};