// Given a list of keywords and a list of search words, return a list of indices that indicate the beginning of sequences of adjacent keywords.

// Examples:

// Search list: ['hello', 'hi', 'welcome', 'greetings', 'hi', 'greetings', 'hey', 'hello']
// Keywords: ['hi', 'hey', 'greetings']
// Output: [4]

function returnIndex(searchlist, keyword) {
    // let result = [];
    // for(let i = 0; i < searchlist.length; i++) {
    //   if(!keyword.includes(searchlist[i])) {
    //     continue;
    //   } 
    //   if(keyword.includes(searchlist[i])) {
        
    //   }
    // }
    // return result;
    
    //check the length of keywords 
    //loop through search list and slice by the length of keywords
    //use a object container
      //use key as the index, and value = set of each new Array
    //object.values loop through and check if the keywords includes all the keywords
    //push the key into the result Array
    //return result
  }
  
  // Search list: ['where', 'she', 'sits', 'she', 'shines', 'and', 'where', 'she', 'shines', 'she', 'sits']
  // Keywords: ['she', 'sits', 'shines']
  // Output: [2, 8]
  
  // Search list: ['peter', 'piper', 'picked', 'a', 'peck', 'of', 'pickled', 'peppers', 'a', 'peck', 'of', 'pickled', 'peppers', 'peter', 'piper', 'picked', 'if', 'peter', 'piper', 'picked', 'a', 'peck', 'of', 'pickled', 'peppers', 'wheres', 'the', 'peck', 'of', 'pickled', 'peppers', 'peter', 'piper', 'picked']
  // Keywords: ['peter', 'picked', 'piper']
  // Output: [0, 13, 17, 31]
  