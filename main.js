console.log("The Loops");
console.log("for in loop");
const table = [21, 22, 23, 24, 25, 26, 228, 29, 30];
for (var x in table) {
  console.log(table[x]);
}
console.log("for of loop")
for (var x of table) {
  console.log(x);
}
console.log("the While loop");
var string = 88;
while (string <= 99) {
  console.log(string);
  string++;

}
console.log("the do while loop");
var num = 77;
do {
  console.log(num);
  num++;

} while (num <= 88);

console.log("i.e.");
const table_2 = ["Hum", "Saath", "Saath", "Hai"];
var string_2 = "egg";
for (var id = 0; id < table_2.length; id++) {
  string_2 = string_2 + table_2[id];
  console.log(string_2);
}
console.log("!");
for (var id = 0; id < table_2.length; id = id + 2) {
  string_2 = string_2 + table_2[id];
  console.log(string_2);
}
var num_x = 5;
do {
  string_2 = string_2 + table_2[num_x];
  string_2 = string_2 + "RAHENGE";
  num_x--;
} while (num_x >= 1);
console.log( "num_x");
