let findVowels = "robertooe";
let vowels = 0;

for (let i = 0; i < findVowels.length; i++) {
    if (/[aieou]/.test(findVowels[i])) {
        vowels++;
    }
}

console.log(vowels);