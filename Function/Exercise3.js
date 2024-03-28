const newData = [
  {
    name: { firstName: "Hasin Anjum", lastName: "Pabon" },
    age: { value: 25 },
    address: { value: "Uttara" },
    gender: "male",
  },
  {
    name: { firstName: "Rafat", lastName: "Hossain" },
    age: { value: 25 },
    address: { value: "Uttara" },
    gender: "male",
  },
  {
    name: { firstName: "Sifat", lastName: "Sabbir" },
    age: { value: 30 },
    address: { value: "Uttara" },
    gender: "male",
  },
];

const transformedData = newData.map((item) => ({
  fullName: item.name,
  Age: item.age.value,
  Address: item.address.value,
  gender: item.gender,
}));
console.log(transformedData);

