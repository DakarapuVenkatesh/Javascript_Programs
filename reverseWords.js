function reverseWords(sentence) {
    let reversedSentence = '';
    let currentWord = '';

    for (let i = 0; i < sentence.length; i++) {
        const currentChar = sentence[i];

        if (currentChar === ' ' || i === sentence.length-1) {
            if(i===sentence.length-1)
            currentWord+=currentChar;
            for (let j = currentWord.length - 1; j >= 0; j--) {
                reversedSentence += currentWord[j];
            }
            if (i !== sentence.length - 1) {
                reversedSentence += ' ';
            }
            currentWord = '';
        } else {
            currentWord += currentChar;
        }
    }

    return reversedSentence;
}
const input = 'This is a sunny day';
const reversedResult = reverseWords(input);
console.log(reversedResult);
