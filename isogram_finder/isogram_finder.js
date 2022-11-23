const IsogramFinder = function (word) {
  this.word = word.toLowerCase().split("");
  this.alphabet = "qwertyuiopasdfghjklzxcvbnm".split("");
};

IsogramFinder.prototype.isIsogram = function () {
  const result = this.alphabet.every((letter) => {
    return this.word.indexOf(letter) === this.word.lastIndexOf(letter);
  });
  return result;
};

module.exports = IsogramFinder;
