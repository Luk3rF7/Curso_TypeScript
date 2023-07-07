interface PersonProtocolo<T, U> {
  name: T;
  lastname: T;
  age: U;
}

const student: PersonProtocolo<string, number> = {
  name: "Lc",
  lastname: "Felipe",
  age: 28,
};

const student2: PersonProtocolo<number, number> = {
  name: 13,
  lastname: 12,
  age: 28,
};
