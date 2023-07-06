type Vehicle = {
  brand: string;
  year: string;
};

type Car = {
  brand: Vehicle["brand"];
  year: Vehicle["year"];
  name: string;
};

const car: Car = {
  brand: "Ford",
  year: "2021",
  name: "Ka",
};
