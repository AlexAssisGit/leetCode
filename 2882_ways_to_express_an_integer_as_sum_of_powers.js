/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */

const MOD = 1_000_000_007;

var numberOfWays = function(n, x) {
    // 1. Lista de potências possíveis
    let potencias = [];
    let base = 1;
    while (base ** x <= n) {
        potencias.push(base ** x);
        base++;
    }

    // 2. DP: dp[s] = nº de jeitos de formar soma s
    let dp = Array(n + 1).fill(0);
    dp[0] = 1;

    // 3. Preenchendo sem permitir repetição
    for (let p of potencias) {
        for (let s = n; s >= p; s--) {
            dp[s] = (dp[s] + dp[s - p]) % MOD;
        }
    }

    return dp[n];
};