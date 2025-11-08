import { formatCurrency } from "../../scripts/utils/money.js";

console.log("test suite : formatCurrency"); //naming a test group - test suite

console.log("converts cents into dollars");
if (formatCurrency(2095) === "20.95") {
  //basic test case
  console.log("passed");
} else {
  console.log("failed");
}
console.log("works with zero");
if (formatCurrency(0) === "0.00") {
  //edge test case
  console.log("passed");
} else {
  console.log("failed");
}
console.log("works rounding up to the nearest cent");
if (formatCurrency(2000.5) === "20.01") {
  //edge test case , rounding up
  console.log("passed");
} else {
  console.log("failed");
}
console.log("works rounding down to the nearest cent");
if (formatCurrency(2000.4) === "20.00") {
  //edge test case , rounding down
  console.log("passed");
} else {
  console.log("failed");
}
