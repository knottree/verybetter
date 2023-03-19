// databases are very... {help me out here, rest of this file...}
let veryBetterWords = [
    {good: "better", better: "best"},
    {good: "bad", better: "awful"},
    {good: "smart", better: "intelligent"},
    {good: "smart", better: "brilliant"},
    {good: "sad", better: "sorrowful"},
    {good: "upset", better: "distraught"},
    {good: "cold", better: "freezing"},
    {good: "strong", better: "forceful"},
    {good: "bright", better: "luminous"},
    {good: "busy", better: "swamped"},
    {good: "careful", better: "cautious"},
    {good: "clear", better: "obvious"},
    {good: "colorful", better: "vibrant"},
    {good: "confused", better: "perplexed"},
    {good: "messy", better: "slovenly"},
    {good: "nice", better: "kind"},
    {good: "often", better: "frequently"},
    {good: "old", better: "ancient"},
    {good: "open", better: "transparent"},
    {good: "good", better: "excellent"},
    {good: "stupid", better: "idiotic"},
    {good: "happy", better: "ecstatic"},
    {good: "exciting", better: "exhilarating"},
    {good: "warm", better: "hot"},
    {good: "weak", better: "frail"},
    {good: "hurt", better: "battered"},
    {good: "large", better: "enormous"},
    {good: "lazy", better: "indolent"},
    {good: "long", better: "extensive"},
    {good: "loose", better: "slack"},
    {good: "skinny", better: "skeletal"},
    {good: "smooth", better: "sleek"},
    {good: "soft", better: "downy"},
    {good: "sorry", better: "apologetic"},
    {good: "special", better: "exceptional"},
    {good: "sure", better: "certain"},
    {good: "angry", better: "furious"},
    {good: "beautiful", better: "gorgeous"},
    {good: "big", better: "massive"},
    {good: "boring", better: "dull"},
    {good: "loud", better: "deafening"},
    {good: "poor", better: "destitute"},
    {good: "creative", better: "innovative"},
    {good: "crowded", better: "bustling"},
    {good: "dear", better: "cherished"},
    {good: "cheap", better: "stingy"},
    {good: "clean", better: "spotless"},
    {good: "short", better: "brief"},
    {good: "difficult", better: "arduous"},
    {good: "dry", better: "arid"},
    {good: "quick", better: "rapid"},
    {good: "pale", better: "ashen"},
    {good: "convincing", better: "compelling"},
    {good: "calm", better: "serene"},
    {good: "ugly", better: "hideous"},
    {good: "small", better: "petite"},
    {good: "funny", better: "hilarious"},
    {good: "quiet", better: "hushed"},
    {good: "rich", better: "wealthy"},
    {good: "accurate", better: "exact"},
    {good: "afraid", better: "fearful"},
    {good: "clever", better: "intelligent"},
    {good: "expensive", better: "costly"},
    {good: "dirty", better: "filthy"},
    {good: "unclean", better: "filthy"},
    {good: "tall", better: "towering"},
    {good: "easy", better: "effortless"},
    {good: "wet", better: "soaked"},
    {good: "slow", better: "sluggish"},
    {good: "talented", better: "gifted"},
    {good: "tasty", better: "delicious"},
    {good: "lovely", better: "adorable"},
    {good: "fast", better: "swift"},
    {good: "pretty", better: "dazzling"},
    {good: "fat", better: "portly"},
    {good: "thin", better: "emaciated"},
    {good: "new", better: "pristine"},
    {good: "first", better: "foremost"},
    {good: "last", better: "final"},
    {good: "high", better: "stratospheric"},
    {good: "early", better: "prompt"},
    {good: "young", better: "juvenile"},
    {good: "important", better: "crucial"},
    {good: "different", better: "distinct"},
    {good: "correct", better: "accurate"},
    {good: "thirsty", better: "parched"},
    {good: "hungry", better: "famished"},
    {good: "kind", better: "benevolent "}
  ]
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