function analyzeSentence() {
    const sentence = document.getElementById('sentenceInput').value;
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;
    let inWord = false;
    const vowels = 'aeiouAEIOU';

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        length++;

        if (char === ' ') {
            if (inWord) {
                wordCount++;
                inWord = false;
            }
        } else if (char === '.') {
            if (inWord) {
                wordCount++;
            }
            break;
        } else {
            inWord = true;
            if (vowels.includes(char)) {
                vowelCount++;
            }
        }
    }

    document.getElementById('length').textContent = length;
    document.getElementById('wordCount').textContent = wordCount;
    document.getElementById('vowelCount').textContent = vowelCount;
}
