const reverseString = function (string) {
  return string.split("").reverse().join("");
  //split breaks a string using a divider, in this case, "", or blank. so hello becomes [h, e, l, l, o]
  //reverse this array. then join using the same divider.
};

module.exports = reverseString;
