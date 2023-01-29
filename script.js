//1 - crie uma função que exiba uma mensagem no console

function fraseConsole (frase) {
    console.log(`A frase do dia é: ${frase}`)
}

fraseConsole('"Exige muito de ti e espera pouco dos outros. Assim, evitarás muitos aborrecimentos." - Confúcio')

//--------------------------------------------------------------------------------------------------------------

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function myName (nome) {
    console.log(`O meu nome é: ${nome}`)
}

myName("Daniel Roger Nitter")

//--------------------------------------------------------------------------------------------------------------

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function myProfile (nome, idade, gostoMusical) {
    console.log(`Olá, meu nome é ${nome}, eu tenho ${idade} anos, e o meu gosto musical preferido é ${gostoMusical}`)
}

myProfile("Daniel Roger Nitter", "21", "Rock N' Roll")

//--------------------------------------------------------------------------------------------------------------

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function myMovie (filme, music) {
    console.log(`O filme que iremos ver hoje será: ${filme}, a música que escutaremos será ${music}`)
}

myMovie("Shrek 2", "Livin' La Vida Loca - Eddie Murphy & Antonio Banderas")

//--------------------------------------------------------------------------------------------------------------

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function multiplica (num) {
    return num * 3
}
console.log(multiplica(4))

//--------------------------------------------------------------------------------------------------------------

//6 - crie uma função que  verifique se uma  variável é true ou false
function comparar (num1, num2) {
    if (num1 === num2) {
        console.log(`Os valores ${num1} e ${num2} são verdadeiros! It's TRUE!!!`)
    } else {
        console.log(`Os valores ${num1} e ${num2} não são verdadeiros! It's FALSE`)
    }
}
comparar(2, "2")