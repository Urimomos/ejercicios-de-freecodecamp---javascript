function truthCheck(collection, pre) {
    const valorReturn = collection.every( elemento => {
        if (elemento[pre]) 
            return true
        else return false;
    });
  return valorReturn;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, 
    {name: "Naomi", role: "", isBot: false},
     {name: "Camperbot", role: "Bot", isBot: true}], "isBot");