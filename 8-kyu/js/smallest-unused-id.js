// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!

function nextId(ids){
  ids = [...new Set(ids.sort((a, b) => a - b))]
  if (Math.min(...ids) > 0) {
    return 0
  }
  
  for (const [i, v] of ids.entries()) {
    if (!ids[i + 1] || ids[i + 1] !== v + 1) {
      return v + 1
    }
  }
}