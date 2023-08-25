/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/
function reverse(string) {
  // Base case: If the string is empty or has only one character, return the string itself.
  if (string.length <= 1) {
    return string;
  }

  // Recursive case: Return the last character of the string concatenated with the reversed substring.
  return string.slice(-1) + reverse(string.slice(0, -1));
}
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
