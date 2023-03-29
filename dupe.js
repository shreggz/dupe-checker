const textbox = document.getElementById("submitted-text");
const dupeBox = document.getElementById("dupe-box");
countDuplicateWords(textbox, dupeBox);

function countDuplicateWords(textbox, dupeBox) {
    function updateCounts() {
        let words = textbox.value.toLowerCase().match(/[\w']+\b/g);
        let {wordCounts, duplicates} = getWordCounts(words);
        let duplicateCounts = getDuplicateCounts(wordCounts, duplicates);
        let dupeCounter = generateDupeCounter(duplicateCounts, duplicates);
        displayDupeCounter(dupeBox, dupeCounter);
    }

    function getWordCounts(words, duplicates) {
        let wordCounts = {};
        duplicates = [];
        words.forEach((word) => {
            if (!wordCounts[word]) {
                wordCounts[word] = 1;
            } else {
                wordCounts[word]++;
                if (!duplicates.includes(word)) {
                    duplicates.push(word);
                }
            }
        });
        return {wordCounts, duplicates};
    }

    function getDuplicateCounts(wordCounts, duplicates) {
        let duplicateCounts = {};
        duplicates.forEach((word) => {
            duplicateCounts[word] = wordCounts[word];
        });
        return duplicateCounts;
    }

    function generateDupeCounter(duplicateCounts, duplicates) {
        dupeCounter = document.createElement("div");
        dupeCounter.classList.add("dupe-counter");
        if (Object.keys(duplicateCounts).length === 0) {
            dupeCounter.textContent = "No duplicate words found.";
        } else {
            let list = document.createElement("ul");
            duplicates.forEach((word) => {
                let listItem = document.createElement("li");
                listItem.textContent = `${word}: ${duplicateCounts[word]}`;
                list.appendChild(listItem);
            });
            dupeCounter.appendChild(list);
        }
        return dupeCounter;
    }

    function displayDupeCounter(dupeBox, dupeCounter) {
        let oldDupeCounts = dupeBox.querySelectorAll(".dupe-counter");
        oldDupeCounts.forEach((count) => {
            dupeBox.removeChild(count);
        });
        dupeBox.appendChild(dupeCounter);
    }

    textbox.addEventListener("input", updateCounts);
}