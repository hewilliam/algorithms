function spitOut(string1, string2, letters) {
    let alphabet = hashLetters(letters)
    console.log(alphabet)
    let shortestWord
    let longerWord
    
    if(string1.length > string2.length) {
      shortestWord = string2
      longerWord = string1
    } else {
      shortestWord = string1
      longerWord = string2
    }
    console.log('shortestWord', shortestWord)
    console.log('longerWord', longerWord)
    
    for(let i = 0; i < shortestWord.length; i++) {
      if(shortestWord[i] === longerWord[i]) {
        if(i === shortestWord.length-1) {
          return shortestWord
        }
        continue
      } else {
        if(alphabet[shortestWord[i]] ===undefined && Number.isInteger(alphabet[longerWord[i]])) {
          return longerWord
        }
        if(Number.isInteger(alphabet[shortestWord[i]]) && alphabet[longerWord[i]] === undefined) {
          return shortestWord
        }
        if(alphabet[shortestWord[i]] > alphabet[longerWord[i]]) {
          return longerWord
        } else {
          return shortestWord
        }
      }
    }
  }
  function hashLetters(letters) {
    let hashedObj = {};
    for(let i = 0; i < letters.length; i++) {
      if(hashedObj[letters[i]] === undefined) {
        hashedObj[letters[i]] = i
      }
    }
    return hashedObj
  }
  spitOut("dz", "zg", "zgac")