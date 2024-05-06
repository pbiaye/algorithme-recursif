function puissance(base, exposant) {
    if (exposant === 0) {       //Cas de base : Si l'exposant est 0, la fonction renvoie 1, 
                                  //car toute base élevée à la puissance 0 est égale à 1.
    return 1;
    } else {                    //Appel récursif : Sinon, la fonction appelle elle-même avec la base inchangée 
                                //et l'exposant diminué de 1.Elle multiplie ensuite le résultat de cet appel récursif par la base et le renvoie
      return base * puissance(base, exposant - 1);
    }
}
