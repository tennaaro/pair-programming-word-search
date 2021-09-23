const transpose = function(matrix) {
    // Put your solution here
    // create return array
    let result = [];
    // loop through array
    for (let i = 0; i < matrix[0].length; i++) {
      // create temp row array
      let row = [];
      for (let j = 0; j < matrix.length; j++) {
        // push entries to position: column, row
        row.push(matrix[j][i])
      }
      // push row to result array
      result.push(row)
    }
    // return result
    return result
  };

const wordSearch = (letters, word) => { 
    if (!letters.length) {
        return false
    }
    if (!word.length) {
        return false
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (let l of horizontalJoin) {
        if (l.includes(word)) {
            return true
        }
    }
    let transposedLetters = transpose(letters);
    const verticalJoin = transposedLetters.map(ls => ls.join(''))
    for (let l of verticalJoin) {
        if (l.includes(word)) {
            return true
        }
    }
    console.log(horizontalJoin)
    
    let reversed = []

    for (let row of horizontalJoin) {
        listRow = row.split("")
        reversedArr = listRow.reverse()
        reversedWord = reversedArr.join("")
        reversed.push(reversedWord)
    }

    for (let l of reversed) {
        if (l.includes(word)) {
            return true
        }
    }

    return false

}


module.exports = wordSearch