const PangramFinder = function (phrase) {
  this.alphabet = "qwertyuiopasdfghjklzxcvbnm".split("");
  this.phrase = phrase.toLowerCase().split(" ").join("").split("");
};

PangramFinder.prototype.isPangram = function () {
  const result = this.alphabet.every((letter) => {
    return this.phrase.indexOf(letter) >= 0;
  });
  return result;
};

module.exports = PangramFinder;
