const a = document.getElementsByClassName("11").item(0).innerHTML;
const b = document.getElementsByClassName("22").item(0).innerHTML;
const c = document.getElementsByClassName("33").item(0).innerHTML;
const d = document.getElementsByClassName("44").item(0).innerHTML;
const e = document.getElementsByClassName("55").item(0).innerHTML;
// ikinci semestre
const f = document.getElementsByClassName("66").item(0).innerHTML;
const g = document.getElementsByClassName("77").item(0).innerHTML;
const h = document.getElementsByClassName("88").item(0).innerHTML;
const i = document.getElementsByClassName("99").item(0).innerHTML;
const j = document.getElementsByClassName("1010").item(0).innerHTML;
const k = document.getElementsByClassName("1111").item(0).innerHTML;

// calculate the average
const average =
  (parseInt(a) +
    parseInt(b) +
    parseInt(c) +
    parseInt(d) +
    parseInt(e) +
    parseInt(f) +
    parseInt(g) +
    parseInt(h) +
    parseInt(i) +
    parseInt(j) +
    parseInt(k)) /
  11;
// display the average
document.getElementsByClassName("average").item(0).innerHTML = average;

// calculate the average of the first semester
const average1 =
  (parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d) + parseInt(e)) / 5;
// display the average of the first semester
document.getElementsByClassName("average1").item(0).innerHTML = average1;

// calculate the average of the second semester
const average2 =
  (parseInt(f) + parseInt(g) + parseInt(h) + parseInt(i) + parseInt(j)) / 5;
// display the average of the second semester
document.getElementsByClassName("average2").item(0).innerHTML = average2;

// calculate variance
const variance =
  (Math.pow(parseInt(a) - average, 2) +
    Math.pow(parseInt(b) - average, 2) +
    Math.pow(parseInt(c) - average, 2) +
    Math.pow(parseInt(d) - average, 2) +
    Math.pow(parseInt(e) - average, 2) +
    Math.pow(parseInt(f) - average, 2) +
    Math.pow(parseInt(g) - average, 2) +
    Math.pow(parseInt(h) - average, 2) +
    Math.pow(parseInt(i) - average, 2) +
    Math.pow(parseInt(j) - average, 2) +
    Math.pow(parseInt(k) - average, 2)) /
  11;
// display variance
document.getElementsByClassName("variance").item(0).innerHTML = variance;

// calculate standard deviation
const standardDeviation = Math.sqrt(variance);
// display standard deviation
document.getElementsByClassName("standardDeviation").item(0).innerHTML =
  standardDeviation;

// calculate weighted mean
const weightedMean =
  (parseInt(a) * 3 +
    parseInt(b) * 3 +
    parseInt(c) * 3 +
    parseInt(d) * 3 +
    parseInt(e) * 3 +
    parseInt(f) * 4 +
    parseInt(g) * 4 +
    parseInt(h) * 4 +
    parseInt(i) * 4 +
    parseInt(j) * 4 +
    parseInt(k) * 4) /
  33;
// display weighted mean
document.getElementsByClassName("weightedMean").item(0).innerHTML =
  weightedMean;

// calculate median
const median = (parseInt(e) + parseInt(j)) / 2;
// display median
document.getElementsByClassName("median").item(0).innerHTML = median;

// calculate mode
const mode = parseInt(e);
// display mode
document.getElementsByClassName("mode").item(0).innerHTML = mode;

// calculate range
const range = parseInt(k) - parseInt(a);
// display range
document.getElementsByClassName("range").item(0).innerHTML = range;
