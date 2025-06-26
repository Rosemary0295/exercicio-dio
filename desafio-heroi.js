
let nomeHeroi = "Joey";
let nivelHeroi = "Bronze";
let xp = 1.500;

switch (nivelHeroi) {
    case "Ferro":
        xp = xp <= 1.000
        console.log(`O Herói de nome ${nomeHeroi}, está no nível: ${nivelHeroi}.`)
        break;

    case "Bronze":
        xp = xp >= 1.001 && xp <= 2.000
        console.log(`O Herói de nome ${nomeHeroi}, está no nível: ${nivelHeroi}.`)
        break;
    
    case "Prata":
        xp = xp >= 2.001 && xp <= 5.000
        console.log(`O Herói de nome ${nomeHeroi}, está no nível ${nivelHeroi}.`)
        break;
    
    case "Ouro":
        xp = xp >= 5.001 && xp <= 7.000
        console.log(`O Herói de nome ${nomeHeroi}, está no nível: ${nivelHeroi}.`)
        break;

    case "Platina":
        xp = xp >= 7.001 && xp <= 8.000
        console.log(`O Herói de nome ${nomeHeroi}, está no nível: ${nivelHeroi}.`)
        break;

    case "Ascendente":
        xp = xp >= 8.001 && xp <= 9.000
        console.log(`O Herói de nome ${nomeHeroi}, está no nível: ${nivelHeroi}.`)
        break;

    case "Imortal":
        xp = xp >= 9.001 && xp <= 10.000
        console.log(`O Herói de nome ${nomeHeroi}, está no nível: ${nivelHeroi}.`)
        break;
        default: `O Herói de nome ${nomeHeroi}, está no nível: Radiante.`;
}