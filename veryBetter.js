// databases are very... {help me out here, rest of this file...}
import veryBetterWords from './betterWords.js';
console.log(veryBetterWords)
// time for some middle school JS, amigos
  let goodWord;
  let betterWord;
  function search(ele) {
      goodWord = document.getElementById("myInput").value.toLowerCase(); 
      // clear results when searching for a new word
      if (!goodWord.length) // gettin' truthy with it
      {
      document.getElementById("betterWord").innerText = "";
      document.getElementById("noResults").innerText = "";  
      }
      // run getBetterWord() if Enter pressed
      if(event.key === 'Enter') 
      {
          getBetterWord(); // do you think Musk is still looking for people who can code?        
      }
  }
  function getBetterWord(){
      // Select the input element and get its value 
      goodWord = document.getElementById("myInput").value.trim().toLowerCase(); // chain keep us together
      // Find a better word
      // Use RegExp
      goodWord = "^" + goodWord + "$";
      let goodWordRegEx = new RegExp(goodWord);
      betterWord = veryBetterWords.filter(word => word.good.match(goodWordRegEx)).map(word => word.better);//marvel at the map
      // Display better word on page
      if (betterWord.length) // truthy is beauty
      { // paid by the line like it's 1999
        if (betterWord.length > 1) // if there is more than one better word, pick one at random
        {
            betterWord = betterWord[Math.floor(Math.random()*betterWord.length)];
        }      
      document.getElementById("betterWord").innerText = betterWord;
      document.getElementById("noResults").innerText = "";  
      }
      else
      {
      document.getElementById("betterWord").innerText = "";  
      document.getElementById("noResults").innerText = "No results. Try something else.";
      }
    }