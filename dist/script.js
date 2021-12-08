// Etape 1 - Sélectionner nos éléments
const formulaire = document.getElementById('formulaire');
const input = document.getElementById('prix');
const erreur = document.getElementById('erreur');
console.log(formulaire);
console.log(input);
console.log(erreur);

let nombre_essais = 0;
let reponse_user;

// Etape 2 - Cacher l'erreur
erreur.style.display = 'none';

// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 101);
console.log(nombreAleatoire);

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup',() => {
    if (isNaN(input.value)) {
        erreur.style.display = 'block';
    }
    else {
        erreur.style.display = 'none';
    }
}

);
    
// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
    e.preventDefault();

    if (isNaN(input.value) || input.value == '') {
        input.style.borderColor = 'red';
    }
    else {
        input.style.borderColor = 'silver';
        nombre_essais++;
        reponse_user = input.value;
        input.value = '';

        // function
        verification(reponse_user);
    }
  
    
});

// Etape 6 - Créer la fonction vérifier

function verification() {
    let instruction = document.createElement('div');

    if (reponse_user < nombreAleatoire) {
        instruction.textContent = 'C\'est plus !';
        instruction.className = 'instruction plus';
    }
    else if (reponse_user > nombreAleatoire) {
        instruction.textContent = 'C\'est moins !';
        instruction.className = 'instruction moins';
    }
    else {
        instruction.textContent = 'Bravo, vous avez trouvé en ' + nombre_essais + ' essais !';
        instruction.className = 'instruction fini';
    }

    document.querySelector('#instruction').prepend(instruction);
    
}