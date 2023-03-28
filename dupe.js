const textbox = document.getElementById('submitted-text');
countDuplicateWords(textbox);

function countDuplicateWords(textbox) {
    // Create an object to store the count of each word encountered
    let wordCounts = {};
  
    // Create an empty array to store any duplicate words found
    let duplicates = [];
  
    // Create an empty object to store the counts of each duplicate word found
    let duplicateCounts = {};
  
    // Function to update the counts whenever the textbox changes
    function updateCounts() {
      // Get the value of the textbox and split it into an array of words
      let words = textbox.value.toLowerCase().split(/\W+/);
  
      // Reset the wordCounts and duplicates arrays
      wordCounts = {};
      duplicates = [];
  
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
  
      // Clear the duplicateCounts object
      duplicateCounts = {};
  
      // Iterate over each duplicate word and store its count in the duplicateCounts object
      duplicates.forEach((word) => {
        duplicateCounts[word] = wordCounts[word];
      });
  
      // Log the duplicateCounts object to the console
      if (Object.keys(duplicateCounts).length > 0) {
        console.log('Duplicate word counts:', duplicateCounts);
      } else {
        console.log('No duplicate words found.');
      }
    }
  
    // Add an event listener to the textbox to call the updateCounts function whenever the textbox changes
    textbox.addEventListener('input', updateCounts);
  }