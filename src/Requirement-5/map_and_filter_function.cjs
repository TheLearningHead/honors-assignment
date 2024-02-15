const data = require("./response.json");

const data1 = data.map((item, index) => ({
  name: item.name,
  year: item.vehicle.year,
}));
console.log("Array of objects with only name and year values\n");
console.log(data1);

const data2 = data.filter((item) => item.vehicle.year > 2020);
console.log("\nArray of objects with year greater than 2020\n");
console.log(data2);