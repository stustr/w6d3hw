const AnagramFinder = function (word) {
  this.word = word.toLowerCase().split("");
};

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  const lengthCheck = (possWord) => {
    return possWord.length === this.word.join("").length;
  };

  const sameLetters = (possWord) => {
    const result = this.word.every((letter) => {
      return possWord.toLowerCase().indexOf(letter) >= 0;
    });
    return result;
  };

  const sameWord = (possWord) => {
    return possWord.toLowerCase() === this.word.join("");
  };

  const result = otherWords.filter((otherWord) => {
    return (
      lengthCheck(otherWord) === true &&
      sameLetters(otherWord) === true &&
      sameWord(otherWord) === false
    );
  });
  return result;
};

module.exports = AnagramFinder;
