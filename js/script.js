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

const generatorPassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbols) => {
    let password = "";
    const passwordLength = 10;

    const generators = [
        getLetterLowerCase, getLetterUpperCase, getNumber, getSymbols
    ]

    for(i = 0; i < passwordLength; i += 4) {
        generators.forEach(() => {
            let randomValue = generators[Math.floor(Math.random() * generators.length)]()
            password += randomValue
        })
    }
    return password.slice(0, passwordLength)
}


// Eventos
generatePasswordButton.addEventListener("click", () => {
    
    let passwordGenerated = generatorPassword(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbols);
    generetedPasswordElement.style.display = "flex"
    showPassword.textContent = passwordGenerated
})