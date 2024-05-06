function estBissextile(annee) {
    if (annee % 4 === 0) {              // condition 1 vérifie si l'année est divisible par 4
    if (annee % 100 === 0) {            //condition 2 vérifie si l'année est divisible par 100
        return annee % 400 === 0;       // Si oui, on vérifie ensuite si elle est divisible par 400
} else {
        return true;                    //  Si c'est le cas, l'année est bissextile Sinon, elle n'est pas bissextile
    }
    } else {
    return false;                       // Sinon, elle n'est pas bissextile
    }
}
