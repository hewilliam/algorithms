// - Find the person with the most votes in an array. In the event of a tie, the person who's name comes last alphabetically wins
//const votes = ['Zack','Zack','Jim', 'Suzy','Suzy', 'Jim', 'Bob']; //--> Suzy



function castVote(array) {
    //count all votes
    let topVote = {}
    for(let i = 0; i < votes.length; i ++) {
      if(topVote[array[i]] === undefined) {
        topVote[array[i]] = 1
      } else {
        topVote[array[i]] ++
      }
    }
    
    //grab highest Max Votes
    let arr = Object.values(topVote)
    let maxVotes = []
    for(key in topVote) {
      if (topVote[key] === Math.max(...arr)) {
        maxVotes.push(key)
      }
    }
    
    //check if maxVotes length is 1, return that value
    if(maxVotes.length === 1) {
      return maxVotes[0]
    } else {
      //sort the maxVotes and return the last one
      let sortedMaxVotes = maxVotes.sort()
      return sortedMaxVotes[sortedMaxVotes.length-1]
    }
  }
  
  
  function mostVotes(arr) {
    let cache = {};
    let namVal = '';
    let numVal = 0;
    arr.forEach( name => {
      cache[name] = cache[name] ? cache[name] + 1 :1;
      
      if (cache[name] > numVal ) {
        numVal = cache[name];
        namVal = name;
      }
      if (cache[name] === numVal) {
          if (namVal.toLowerCase() < name.toLowerCase() ){
          namVal = name;
        }
      }
    });
    
    return namVal;
    }
  
  const votes = ['Zack','Zack','Jim','Jim', 'Suzy','Suzy', 'Bob']
  
  mostVotes(votes)