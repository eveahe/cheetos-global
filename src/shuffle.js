// This shuffles the cheeto objects in the array so the game starts randomly each time.
// This implementation of the Fisher Yates Shuffle comes from Mike Bostock https://bost.ocks.org/mike/shuffle/

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export { shuffleArray };