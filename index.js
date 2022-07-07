'use strict';

const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const passwordLength = document.getElementById('password-length');
const copyBtn = document.getElementById('copy-btn');

const generatePassword = () => {
    getPasswordOne()
    getPasswordTwo()
}

const getPasswordOne = () => {
    let randomPassword = '';

    for (let i = 0; i < passwordLength.value; i++) {
        let randomCharacter = Math.floor(Math.random() * characters.length);
        randomPassword += characters[randomCharacter]
        document.getElementById('password-one').textContent = randomPassword;
    }
}

const getPasswordTwo = () => {
    let randomPasswordTwo = '';

    for (let i = 0; i < passwordLength.value; i++) {
        let randomCharacter = Math.floor(Math.random() * characters.length);
        randomPasswordTwo += characters[randomCharacter]
        document.getElementById('password-two').textContent = randomPasswordTwo;
    }
}

document.getElementById('generate-btn').addEventListener('click', generatePassword);
