// Seleção de elementos
const generatePasswordButton = document.querySelector("#generate-password")
const generetedPasswordElement = document.querySelector("#generated-password")
const showPassword = document.querySelector("#generated-password h4")

// Funções
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97) 
}


const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65) 
}

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString()
}

const getSymbols = () => {
    const symbols = "(){}[]=<>/,.!@#$%*+-";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const generatorPassword = () => {
    console.log("Gerando senha")
    let password = "";
    let caractere;
    for(let i = 0; i < 12; i++) {
        let choseCaractere = Math.floor(Math.random() * 5);
        switch(choseCaractere){
            case 1:
                caractere = getLetterLowerCase();
                password = `${password}${caractere}`;
                break;
            
            case 2:
                caractere = getLetterUpperCase();
                password = `${password}${caractere}`;
                break;
            
            case 3:
                caractere = getNumber();
                password = `${password}${caractere}`;
                break;

            case 4:
                caractere = getSymbols();
                password = `${password}${caractere}`;
                break;
                
            default:
                continue;
        }
    }
    return password
}


// Eventos
generatePasswordButton.addEventListener("click", () => {
    
    let passwordGenerated = generatorPassword();
    generetedPasswordElement.style.display = "flex"
    showPassword.textContent = passwordGenerated
})