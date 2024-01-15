
const shuffle = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

function generateRandomString(len : number) {
    let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let num = '1234567890';
    let symbols = '@^;#&*()-+:\'|{}%!~,./\\_][=';
    // 30 + 30 + 20 + 20
    let countLc = Math.floor(len * 0.3), countUc = Math.floor(len * 0.3), countN = Math.floor(len*0.2), countS = Math.floor(len*0.2);
    let rem = len - (countLc+countUc+countN+countS);
    countS = countS + rem;

    let max = Math.max(countLc, countS);
    let lcSub = "";
    for(let i=0; i< max; i++) {
        if (countLc>=0) {
            let pos = getRandomInt(25)
            lcSub += lowerCase.charAt(pos)
            countLc--;
        }
        if (countS>=0) {
            let pos = getRandomInt(25)
            lcSub += symbols.charAt(pos)
            countS--;
        }
        if (countUc>=0) {
            let pos = getRandomInt(25)
            lcSub += upperCase.charAt(pos)
            countUc--;
        }
        if (countN>=0) {
            let pos = getRandomInt(9)
            lcSub += num.charAt(pos)
            countN--;
        }
    }
    let ar = Array.from(lcSub);
    let shuffledAr = shuffle(ar);
    let shuffled=shuffledAr.join('')
    return shuffled;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


export {
    generateRandomString as generateRandomString
}