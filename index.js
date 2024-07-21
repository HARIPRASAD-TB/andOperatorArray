const andOperatorArray = (array) => {
    let holdValue = true;
  
    for (let i = 0; i < array.length; i++) {
      if (!(holdValue && array[i])) {
        holdValue = false;
        break; // Exit the loop early
      }
    }
  
    return holdValue;
};

module.exports = andOperatorArray;