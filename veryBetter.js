let veryBetterWords = [
    {good: "better", better: "best"},
    {good: "bad", better: "awful"},
    {good: "smart", better: "intelligent"},
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
    {good: "fast", better: "swift"}
  ]
  let goodWord;
  let betterWord;
  function search(ele) {
     // clear results when searching for a new word
      goodWord = document.getElementById("myInput").value.toLowerCase();
      if (goodWord.length === 0)
      {
      document.getElementById("betterWord").innerText = "";
      document.getElementById("noResults").innerText = "";  
      }
     // run getBetterWord() if Enter pressed
      if(event.key === 'Enter') 
      {
          getBetterWord();        
      }
  }
  function getBetterWord(){
      // Select the input element and get its value 
      goodWord = document.getElementById("myInput").value.toLowerCase();
      // Find a better word
      betterWord = veryBetterWords.filter(word => word.good.match(goodWord)).map(word => word.better);
      // Display better word on page
      if (betterWord.length) // truthy beauty
      {      
      document.getElementById("betterWord").innerText = betterWord;
      document.getElementById("noResults").innerText = "";  
        }
      else
      {
      document.getElementById("betterWord").innerText = "";  
      document.getElementById("noResults").innerText = "No results. Try a different word.";
      }
    }