var temperature = 17;
var raining = false;


if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outisde isn't such a great idea!");
}
else if (temperature < 0) {
  console.log("Dress warmly before you go outside!");
}
else if (temperature < 15) {
  console.log("At least wear a jacket before you go outside!");
}
else {
  console.log("Go outside and enjoy the warm weather!");
}

if (!raining){
  console.log("Leave your umbrella at home!");
}
else {
  console.log("Better take an umbrella!");
}