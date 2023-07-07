function unirObject<o1, o2>(obj1: o1, obj2: o2): o1 & o2 {
  return { ...obj1, ...obj2 };
}

const obj1 = { key1: "value 1" };
const obj2 = { key1: "value 2" };

const union = unirObject(obj1, obj2);
console.log(union);
