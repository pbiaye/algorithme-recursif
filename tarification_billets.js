function calculerPrixBillet(age) {
if (age <= 12) {                        // Si l'âge est inférieur ou égal à 12, le prix est de 10 $
return 10;
} else if (age <= 17) {                 // Si l'âge est compris entre 13 et 17 ans, le prix est de 15 $.
return 15;
} else {                                // Sinon, le prix est de 20 $ (adultes).
return 20;
    }
}

const age = prompt("Veuillez saisir votre âge :");
const prixBillet = calculerPrixBillet(age);

if (age <= 0) {                                 //On vérifie si l'âge est inférieur ou égal à 0. 
console.log("Âge invalide. Veuillez saisir un nombre positif.");  //Si c'est le cas, un message d'erreur est affiché indiquant un âge invalide.

} else {
    console.log("Le prix du billet est de " + prixBillet + " $.");  //Sinon, le prix du billet est affiché à l'utilisateur.
}
