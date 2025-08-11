const MOD = 1_000_000_007;

var productQueries = function(n, queries) {
    
    function calcPotencias(restante){
    // calcular vetor de potencias
        let potencia = 0;
        let powers = [];
        
        while(restante > 0)
        {
            if((restante & 1) === 1) // Comparação bit a bit
            { 
                powers.push(2 ** potencia);
            }
            restante = restante >> 1; // avança um bit
            potencia++;
        }
        return powers;
    }

    function calcularResposta(queries, powers){
        // funcao indentada para calcular vetor de respostas
        return queries.map(([a, b], indice) => {
            if (a === b){
                return powers[a] % MOD; 
            } else {
                const intervalo = powers.slice(a, b + 1);
                return intervalo.reduce((produto, val) => (produto * val) % MOD, 1);
            }
        });
    }
    powers = calcPotencias(n);
    return calcularResposta(queries, powers);
};