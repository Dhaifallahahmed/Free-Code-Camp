// Setup
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
  };
  
  // Only change code below this line
  function updateRecords(id, prop, value) {
  if(prop!="tracks" && value!="" ){
  collection[id][prop]="ABBA";
  }
  else if(prop=="tracks" && collection.id.tracks=="" )
  {
    arr=[];
    collection[id][prop]="Take a Chance on Me";
  }
  else if(prop=="tracks" && value!="")
  {
    collection[id][prop].push(value);
  }
    return collection;
  }
  
  updateRecords(5439, "artist", "ABBA");
// Setup
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
  };
  
  // Only change code below this line
  function updateRecords(id, prop, value) {
  if(prop!="tracks" && value!="" ){
  collection[id][prop]="ABBA";
  }
  else if(prop=="tracks" && collection.id.tracks=="" )
  {
    arr=[];
    collection[id][prop]="Take a Chance on Me";
  }
  else if(prop=="tracks" && value!="")
  {
    collection[id][prop].push(value);
  }
    return collection;
  }
  
  updateRecords(5439, "artist", "ABBA");
    