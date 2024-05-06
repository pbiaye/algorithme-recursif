function fibonacci(n) {
    //Cas de base : Si n est 0 ou 1, la fonction renvoie directement n, 
    //car ce sont les deux premiers nombres de la séquence de Fibonacci
    if (n === 0 || n === 1) { 
    return n;
    //Appel récursif : Sinon, la fonction appelle elle-même deux fois, avec n - 1 et n - 2 comme arguments, 
    //et renvoie la somme des valeurs retournées par ces appels récursifs
    } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
