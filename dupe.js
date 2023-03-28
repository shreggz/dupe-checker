const textbox = document.getElementById("submitted-text");
const duplicates = countDuplicateWords(textbox);
if (duplicates) {
    console.log("Duplicate words found:", duplicates);
} else {
    console.log("No duplicate words found.");
}

function countDuplicateWords(textbox) {
    // Get the value of the textbox and split it into an array of words
    const words = textbox.value.toLowerCase().split(/\W+/);
  
    // Create an empty object to store the count of each word encountered
    const wordCounts = {};
  
    // Create an empty array to store any duplicate words found
    const duplicates = [];
  
    // Iterate over each word in the array
    words.forEach((word) => {
      // If the word is not already in the wordCounts object, add it with a count of 1
      if (!wordCounts[word]) {
        wordCounts[word] = 1;
      } 
      // If the word is already in the wordCounts object, increment its count and add it to the duplicates array if necessary
      else {
        wordCounts[word]++;
        if (!duplicates.includes(word)) {
          duplicates.push(word);
        }
      }
    });
  
    // Create an empty object to store the counts of each duplicate word found
    const duplicateCounts = {};
  
    // Iterate over each duplicate word and store its count in the duplicateCounts object
    duplicates.forEach((word) => {
      duplicateCounts[word] = wordCounts[word];
    });
  
    // Return the duplicateCounts object, or null if no duplicates were found
    return Object.keys(duplicateCounts).length > 0 ? duplicateCounts : null;
  }
  
  